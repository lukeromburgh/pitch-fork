from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:4200"}})  # Allow Angular to communicate with Flask

# Corrected the typo here:
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///posts.db'  # Proper configuration
db = SQLAlchemy(app)

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
