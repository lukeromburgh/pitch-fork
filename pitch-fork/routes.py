from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import Post, db

post_bp = Blueprint('post', __name__)

@post_bp.route('/posts', methods=['POST'])
@jwt_required()
def create_post():
    data = request.json
    user_id = get_jwt_identity()  # Get the logged-in user ID
    new_post = Post(title=data['title'], content=data['content'], user_id=user_id)
    
    db.session.add(new_post)
    db.session.commit()
    
    return jsonify({'message': 'Post created', 'post': new_post.id}), 201
