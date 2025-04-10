from flask import Flask, request, jsonify
from flask import send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask import make_response
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS, cross_origin
from datetime import datetime
from datetime import datetime, timedelta  # Added timedelta
from functools import wraps  # Added wraps
import os
import logging
logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
CORS(app, resources={r"/*": {
    "origins": "*",
    "methods": ["GET", "POST", "OPTIONS", "DELETE", "PUT"],
    "allow_headers": ["Authorization", "Content-Type"]
}})
print("CORS initialized")  # Confirm this runs

app.config['JSON_AS_ASCII'] = False
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True

app.config["JWT_TOKEN_LOCATION"] = ["headers"]
app.config["JWT_HEADER_NAME"] = "Authorization"
app.config["JWT_HEADER_TYPE"] = "Bearer"

# Database Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///posts.db'  # SQLite for testing
app.config['JWT_SECRET_KEY'] = 'your_secret_key'  # Change to a secure key



@app.before_request
def log_request():
    print(f"Request: {request.method} {request.path} Headers: {request.headers}")


db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# =================== Models ===================
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    is_admin = db.Column(db.Boolean, default=False)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    bio = db.Column(db.Text, nullable=True)
    profile_picture = db.Column(db.String(255), nullable=True)
    banner = db.Column(db.String(255), nullable=True)
    banner_type = db.Column(db.String(10), default='image')
    banner_color = db.Column(db.String(7), default='#2C3539')

    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    subtitle = db.Column(db.String(100), nullable=False)
    link = db.Column(db.String(100), nullable=True)
    content = db.Column(db.Text, nullable=False)
    date_posted = db.Column(db.DateTime, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)  # Foreign key to user.id
    username = db.Column(db.String(50), db.ForeignKey('user.username'), nullable=False)  # Foreign key to user.username
    category = db.Column(db.String(255), nullable=True)  # New column

    user = db.relationship('User', backref=db.backref('posts', lazy=True), foreign_keys=[user_id])  # Relationship to User model

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'subtitle': self.subtitle,
            'link': self.link,
            'content': self.content,
            'date_posted': self.date_posted,
            'user_id': self.user_id,
            'author': self.user.username,  # Access username from the User model
            'category': self.category
        }

class Likes(db.Model):
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False, primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'), nullable=False, primary_key=True)
    isActive = db.Column(db.Boolean, nullable=False, default=True)
    lastUpdated = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship('User', backref=db.backref('user', lazy=True))  # 🔹 Relationship to User model
    post = db.relationship('Post', backref=db.backref('post', lazy=True))  # 🔹 Relationship to User model

    def to_dict(self): return { 'user_id': self.user_id, 'post_id': self.post_id, 'isActive': self.isActive, 'lastUpdated': self.lastUpdated }


class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    date_posted = db.Column(db.DateTime, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'), nullable=False)

    # Fix: Specify the foreign key column explicitly
    user = db.relationship('User', backref='comments', foreign_keys=[user_id])  
    post = db.relationship('Post', backref='comments')

    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'date_posted': self.date_posted,
            'user_id': self.user_id,
            'username': self.user.username,
            'post_id': self.post_id
        }

# Create tables if they don't exist
with app.app_context():
    db.create_all()

# =================== Routes ===================
@app.route('/test-cors', methods=['GET', 'OPTIONS'])
def test_cors():
    return jsonify({"message": "CORS test"}), 200

# 🔹 User Registration
@app.route('/sign-up', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])  # Allow specific headers for POST requests
def sign_up():
    data = request.json
    if User.query.filter_by(email=data['email']).first():
        return jsonify({"error": "Email already exists"}), 400

    new_user = User(username=data['name'], email=data['email'])
    new_user.set_password(data['password'])  # Hash password
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User created successfully"}), 201

# 🔹 User Login (JWT Authentication)
@app.route('/login', methods=['POST'])
def login():
    try:
        print("Headers:", request.headers)  # Log headers
        print("Raw data:", request.data)      # Log raw request body

        data = request.get_json()
        print("Parsed JSON:", data)           # Log parsed JSON

        if not data or 'email' not in data or 'password' not in data:
            return jsonify({'message': 'Missing email or password'}), 400

        user = User.query.filter_by(email=data['email']).first()

        if user and user.check_password(data['password']):
            access_token = create_access_token(identity=str(user.id), expires_delta=False)
            #access_token = create_access_token(identity=str(user.id))
            return jsonify({'token': access_token, 'user_id': user.id}), 200

        return jsonify({'message': 'Invalid credentials'}), 401
    except Exception as e:
        print("Error in login:", e)
        return jsonify({'message': 'Internal Server Error', 'error': str(e)}), 500



# 🔹 Get All Posts (Protected Route)
@app.route('/api/posts', methods=['GET'])
@jwt_required()
def get_posts():
    user_id = get_jwt_identity()  # This gets the user info from the token
    print(f"Received user_id from JWT: {user_id}")  # Log the user_id to see if it's correctly decoded
    print("Fetching all posts")  # Debugging: Log when fetching all posts
    all_posts = Post.query.all()
    
    posts_with_likes = []
    for post in all_posts:
        like_count = Likes.query.filter_by(post_id=post.id).count()  # Count likes for the post
        posts_with_likes.append({
            'id': post.id,
            'title': post.title,
            'content': post.content,
            'category': post.category,

            'date_posted': post.date_posted,
            'user_id': post.user_id,
            'username': post.user.username,  # Include author's username
            'likes': like_count  # Include like count in response
        })

    return jsonify(posts_with_likes), 200


# 🔹 Create a New Post (Protected Route)
@app.route('/api/posts', methods=['POST'])
@jwt_required()
def create_post():
    user_id = get_jwt_identity()  # 🔹 Get user ID from token
    data = request.json

    print("Received data:", data)

    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    tags = data.get('tags', '')

    new_post = Post(
        title=data['title'],
        subtitle=data.get('subtitle', ''),
        link=data.get('link', ''),
        content=data['content'],
        user_id=user_id,  # 🔹 Associate the post with the logged-in user
        username=user.username,  # 🔹 Associate the post with the logged-in user
        category=tags  # Optional field
    )

    db.session.add(new_post)
    db.session.commit()
    return jsonify(new_post.to_dict()), 201

# 🔹 Get a Single Post
@app.route('/api/post/<int:post_id>', methods=['GET'])
@jwt_required()
def get_post_by_id(post_id):
    user_id = get_jwt_identity()  # Get user ID from JWT token
    post = Post.query.get(post_id)  # Fetch post by ID
    print(f"Fetching post with ID: {post_id}")  # Debugging: Log post ID

    if not post:
        print("Post not found")  # Debugging: Log if post is not found
        return jsonify({'message': 'Post not found'}), 404  # Handle missing post

    like_count = Likes.query.filter_by(post_id=post.id).count()  # Count likes

    post_data = {
        'id': post.id,
        'title': post.title,
        'subtitle': post.subtitle,
        'link': post.link,
        'content': post.content,
        'category': post.category,
        'date_posted': post.date_posted,
        'user_id': post.user_id,
        'username': post.user.username,  # Include username
        'likes': like_count,
    }

    print("Post found:", post_data)  # Debugging: Log post data
    return jsonify(post_data), 200  # Return post data


@app.route('/api/comment', methods=['POST'])
@jwt_required()
def create_comment():
    user_id = get_jwt_identity()
    data = request.json

    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    new_comment = Comment(
        content=data['content'],
        user_id=user_id,
        post_id=data['post_id']
    )

    db.session.add(new_comment)
    db.session.commit()
    return jsonify(new_comment.to_dict()), 201


@app.route('/api/comment', methods=['GET'])
@jwt_required()
def get_comments():
    # Expect a query parameter ?post_id=123
    post_id = request.args.get('post_id', type=int)
    if post_id is None:
        return jsonify({'error': 'Missing post_id parameter'}), 400
    
    comments = Comment.query.filter_by(post_id=post_id).all()
    return jsonify([comment.to_dict() for comment in comments]), 200



    # =================== File Uploads & Profile updates ===================
    # ===========================================================================================================================

UPLOAD_FOLDER = os.path.join(os.getcwd(), 'public', 'uploads')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(os.path.join(UPLOAD_FOLDER, 'profile_pics'), exist_ok=True)
os.makedirs(os.path.join(UPLOAD_FOLDER, 'banners'), exist_ok=True)

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/api/profile', methods=['GET'])
@jwt_required()
def get_profile():
    # get the current user's id from the token (assuming identity is the user ID)
    user_id = get_jwt_identity()
    print(f"Fetching profile for user_id from JWT: {user_id}")

    user = User.query.get(user_id)
    if not user:
        print("User not found!")
        return jsonify({'error': 'User not found'}), 404
    return jsonify({
        'id': user.id,
        'username': user.username,
        'email': user.email,
        'bio': user.bio or '',
        'profile_picture': user.profile_picture or '',
        'banner': user.banner or '',
        'banner_type': user.banner_type or '',
        'banner_color': user.banner_color or '#2C3539',

        # add any additional fields you'd like to expose
    }), 200

@app.route('/api/profile', methods=['PUT'])
@jwt_required()
def update_profile():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    data = request.form

    # Update bio
    if 'bio' in data:
        user.bio = data['bio']

    # Update password
    if 'old_password' in data and 'new_password' in data:
        if not user.check_password(data['old_password']):
            return jsonify({'error': 'Incorrect old password'}), 400
        user.set_password(data['new_password'])

    # Handle profile picture upload
    if 'profile_picture' in request.files:
        profile_picture = request.files['profile_picture']
        if profile_picture and allowed_file(profile_picture.filename):
            # Preserve the original file extension
            ext = profile_picture.filename.rsplit('.', 1)[1].lower()
            filename = f"{user_id}_profile.{ext}"
            profile_path = os.path.join(app.config['UPLOAD_FOLDER'], 'profile_pics', filename)
            profile_picture.save(profile_path)
            # Store a relative URL, not an absolute path
            user.profile_picture = f"/uploads/profile_pics/{filename}"

    # Handle banner type and upload
    if 'banner_type' in data:
        user.banner_type = data['banner_type']
        if data['banner_type'] == 'color':
            user.banner_color = data.get('banner_color', '#2C3539')
            user.banner = None  # Clear banner if switching to color
        elif 'banner' in request.files:
            banner = request.files['banner']
            if banner and allowed_file(banner.filename):
                # Preserve the original file extension
                ext = banner.filename.rsplit('.', 1)[1].lower()
                filename = f"{user_id}_banner.{ext}"
                banner_path = os.path.join(app.config['UPLOAD_FOLDER'], 'banners', filename)
                banner.save(banner_path)
                # Store a relative URL, not an absolute path
                user.banner = f"/uploads/banners/{filename}"

    db.session.commit()
    return jsonify({'message': 'Profile updated successfully'}), 200

# Static file serving route (add this if not already present)
@app.route('/uploads/<path:filename>')
def serve_uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

@app.route('/api/profile/<int:user_id>', methods=['GET'])
@jwt_required()
def get_profile_by_id(user_id):
    # Optionally, you can check if the requesting user has permission to view this profile
    current_user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    return jsonify({
        'id': user.id,
        'username': user.username,
        'email': user.email,
        'bio': user.bio or '',
        'profile_picture': user.profile_picture or '',
        'banner': user.banner or '',
        'banner_type': user.banner_type or '',
        'banner_color': user.banner_color or '#2C3539',
    }), 200


@app.route('/api/like/<int:post_id>', methods=['POST'])
@jwt_required()
def like_post(post_id):
    user_id = get_jwt_identity()

    existing_like = Likes.query.filter_by(user_id=user_id, post_id=post_id).first()

    if existing_like:
        db.session.delete(existing_like)  # Correct way to "unlike"
        db.session.commit()
        return jsonify({'message': 'Unliked', 'likes': Likes.query.filter_by(post_id=post_id).count()}), 200

    new_like = Likes(user_id=user_id, post_id=post_id)
    db.session.add(new_like)
    db.session.commit()
    
    return jsonify({'message': 'Liked', 'likes': Likes.query.filter_by(post_id=post_id).count()}), 201


@app.route('/api/user/<int:user_id>/posts', methods=['GET'])
def get_user_posts(user_id):
    posts = Post.query.filter_by(user_id=user_id).all()
    return jsonify([post.to_dict() for post in posts]), 200


#-------------------------------- Admin endpoints --------------------------------
# Admin authorization middleware
# def admin_required():
#     def wrapper(fn):
#         @wraps(fn)
#         @jwt_required()
#         def decorator(*args, **kwargs):
#             user_id = get_jwt_identity()
#             user = User.query.get(user_id)
            
#             if not user or not user.is_admin:
#                 return jsonify({"error": "Admin privileges required"}), 403
#             return fn(*args, **kwargs)
#         return decorator
#     return wrapper

# Admin dashboard data
from flask import make_response

@app.route('/api/admin/dashboard', methods=['GET', 'OPTIONS'])
def admin_dashboard():
    # Handle OPTIONS requests separately
    if request.method == 'OPTIONS':
        response = make_response()
        response.headers['Access-Control-Allow-Origin'] = 'http://localhost:4200'
        response.headers['Access-Control-Allow-Methods'] = 'GET, POST, DELETE, OPTIONS, PUT'
        response.headers['Access-Control-Allow-Headers'] = 'Authorization, Content-Type'
        response.headers['Access-Control-Allow-Credentials'] = 'true'
        return response, 200

    # Now handle the GET request with JWT authentication
    from flask_jwt_extended import jwt_required, get_jwt_identity
    # You can either decorate a separate function or manually check:
    @jwt_required()
    def protected_dashboard():
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
        if not user or not user.is_admin:
            return jsonify({'error': 'Unauthorized access'}), 403

        # Gather dashboard metrics (or whatever logic you have)
        user_count = User.query.count()
        post_count = Post.query.count()
        like_count = Likes.query.count()

        thirty_days_ago = datetime.utcnow() - timedelta(days=30)
        recent_posts = Post.query.filter(Post.date_posted >= thirty_days_ago).all()
        posts_by_day = {}
        for post in recent_posts:
            day = post.date_posted.strftime("%Y-%m-%d")
            posts_by_day[day] = posts_by_day.get(day, 0) + 1
        date_range = [(datetime.utcnow() - timedelta(days=i)).strftime("%Y-%m-%d") for i in range(30, -1, -1)]
        chart_data = [{"date": date, "count": posts_by_day.get(date, 0)} for date in date_range]

        return jsonify({
            "counts": {
                "users": user_count,
                "posts": post_count,
                "likes": like_count
            },
            "chart_data": chart_data
        }), 200

    return protected_dashboard()

@app.route('/api/admin/users', methods=['GET', 'OPTIONS'])
def get_all_users():
    if request.method == 'OPTIONS':
        response = make_response()
        response.headers['Access-Control-Allow-Origin'] = 'http://localhost:4200'
        response.headers['Access-Control-Allow-Methods'] = 'GET, POST, DELETE, OPTIONS, PUT'
        response.headers['Access-Control-Allow-Headers'] = 'Authorization, Content-Type'
        response.headers['Access-Control-Allow-Credentials'] = 'true'
        return response, 200

    # Existing logic for GET:
    users = User.query.all()
    users_data = [{
        'id': user.id,
        'username': user.username,
        'email': user.email,
        'is_admin': user.is_admin,
        'post_count': Post.query.filter_by(user_id=user.id).count()
    } for user in users]
    
    return jsonify(users_data), 200

# Get all posts (admin only)
@app.route('/api/admin/posts', methods=['GET', 'OPTIONS'])
#@admin_required()
def get_all_posts():
    posts = Post.query.all()
    posts_data = []
    
    for post in posts:
        like_count = Likes.query.filter_by(post_id=post.id).count()
        posts_data.append({
            'id': post.id,
            'title': post.title,
            'content': post.content[:100] + '...' if len(post.content) > 100 else post.content,
            'date_posted': post.date_posted,
            'user_id': post.user_id,
            'username': post.username,
            'category': post.category,
            'likes': like_count
        })
    
    return jsonify(posts_data), 200

# Delete user (admin only)
@app.route('/api/admin/users/<int:user_id>', methods=['DELETE', 'OPTIONS'])
#@admin_required()
def delete_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    
    # Delete all user's posts and likes
    Post.query.filter_by(user_id=user_id).delete()
    Likes.query.filter_by(user_id=user_id).delete()
    
    db.session.delete(user)
    db.session.commit()
    
    return jsonify({"message": "User and all associated data deleted successfully"}), 200

# Delete post (admin only)
@app.route('/api/admin/posts/<int:post_id>', methods=['DELETE', 'OPTIONS'])
#@admin_required()
def delete_post(post_id):
    post = Post.query.get(post_id)
    if not post:
        return jsonify({"error": "Post not found"}), 404
    
    # Delete all likes associated with this post
    Likes.query.filter_by(post_id=post_id).delete()
    
    db.session.delete(post)
    db.session.commit()
    
    return jsonify({"message": "Post deleted successfully"}), 200

# Make a user admin (super-admin only)
@app.route('/api/admin/users/<int:user_id>/make-admin', methods=['POST', 'OPTIONS'])
#@admin_required()
def make_user_admin(user_id):
    # Here you might want additional checks for "super admin" privileges
    user = User.query.get(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    
    user.is_admin = True
    db.session.commit()
    
    return jsonify({"message": "User is now an admin"}), 200


if __name__ == '__main__':
    app.run(debug=True, port=5005)