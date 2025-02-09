from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:4200"}})  # Allow Angular to communicate with Flask

# Corrected the typo here:
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///posts.db'  # Proper configuration
app.config['JWT_SECRET_KEY'] = 'your_secret_key'
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)

    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    date_posted = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {'id': self.id, 'title': self.title, 'content': self.content, 'date_posted': self.date_posted}

# Creating tables if they don't exist yet
with app.app_context():
    db.create_all()

@app.route('/sign-up', methods=['POST'])
def sign_up():
    data = request.json
    new_user = User(username=data['name'], email=data['email'], password=data['password'])
    db.session.add(new_user)
    db.session.commit()

# Get all posts (GET request)
@app.route('/api/posts', methods=['GET'])
def get_posts():
    all_posts = Post.query.all()
    return jsonify([post.to_dict() for post in all_posts])

# Create a new post (POST request)
@app.route('/api/posts', methods=['POST'])
def create_post():
    data = request.json
    new_post = Post(title=data['title'], content=data['content'])
    db.session.add(new_post)
    db.session.commit()
    return jsonify(new_post.to_dict()), 201

if __name__ == '__main__':
    app.run(debug=True)
