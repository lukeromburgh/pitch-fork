from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS, cross_origin
from datetime import datetime
import os

app = Flask(__name__)
CORS(app, origins="http://localhost:4200")

app.config['JSON_AS_ASCII'] = False
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True


# Database Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///posts.db'  # SQLite for testing
app.config['JWT_SECRET_KEY'] = 'your_secret_key'  # Change to a secure key

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# =================== Models ===================
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    bio = db.Column(db.Text, nullable=True)
    profile_picture = db.Column(db.String(255), nullable=True)
    banner = db.Column(db.String(255), nullable=True)

    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    date_posted = db.Column(db.DateTime, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)  # 🔹 Foreign key
    category = db.Column(db.String(255), nullable=True)  # 🔹 New column

    user = db.relationship('User', backref=db.backref('posts', lazy=True))  # 🔹 Relationship to User model

    def to_dict(self): return { 'id': self.id, 'title': self.title, 'content': self.content,
        'date_posted': self.date_posted, 'user_id': self.user_id, 'author': self.user.username, 'category': self.category }

class Likes(db.Model):
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False, primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'), nullable=False, primary_key=True)
    isActive = db.Column(db.Boolean, nullable=False, default=True)
    lastUpdated = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship('User', backref=db.backref('user', lazy=True))  # 🔹 Relationship to User model
    post = db.relationship('Post', backref=db.backref('post', lazy=True))  # 🔹 Relationship to User model

    def to_dict(self): return { 'user_id': self.user_id, 'post_id': self.post_id, 'isActive': self.isActive, 'lastUpdated': self.lastUpdated }


# Create tables if they don't exist
with app.app_context():
    db.create_all()

# =================== Routes ===================

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
            access_token = create_access_token(identity=str(user.id))
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

    tags = data.get('tags', '')

    new_post = Post(
        title=data['title'],
        content=data['content'],
        user_id=user_id,  # 🔹 Associate the post with the logged-in user
        category=tags  # Optional field
    )

    db.session.add(new_post)
    db.session.commit()
    return jsonify(new_post.to_dict()), 201


@app.route('/api/profile', methods=['GET'])
@jwt_required()
def get_profile():
    # get the current user's id from the token (assuming identity is the user ID)
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    return jsonify({
        'id': user.id,
        'username': user.username,
        'email': user.email,
        # add any additional fields you'd like to expose
    }), 200

@app.route('/api/profile', methods=['PUT'])
@jwt_required()
def update_profile():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    
    if not user:
        return jsonify({'error': 'User not found'}), 404

    # Get form data (if sending files)
    data = request.form

    # Update bio
    if 'bio' in data:
        user.bio = data['bio']

    # Update password if provided
    if 'old_password' in data and 'new_password' in data:
        if not check_password_hash(user.password, data['old_password']):
            return jsonify({'error': 'Incorrect old password'}), 400
        user.password = generate_password_hash(data['new_password'])

    # Handle profile picture upload
    if 'profile_picture' in request.files:
        profile_picture = request.files['profile_picture']
        if profile_picture.filename != '':
            profile_path = f"uploads/profile_pics/{user_id}.jpg"  # Customize storage path
            profile_picture.save(profile_path)
            user.profile_picture = profile_path  # Save path in DB

    # Handle banner upload
    if 'banner' in request.files:
        banner = request.files['banner']
        if banner.filename != '':
            banner_path = f"uploads/banners/{user_id}.jpg"
            banner.save(banner_path)
            user.banner = banner_path

    db.session.commit()
    return jsonify({'message': 'Profile updated successfully'}), 200


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
    return jsonify([post.to_dict() for post in posts])


if __name__ == '__main__':
    app.run(debug=True)