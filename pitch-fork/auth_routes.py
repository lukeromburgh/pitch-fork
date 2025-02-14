from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from models import User, db
from auth_routes import auth_bo

auth_bp = Blueprint('auth', __name__)
app.register_blueprint(auth_bp)

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.json
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'message': 'User already exists'}), 400

    new_user = User(username=data['username'], email=data['email'])
    new_user.set_password(data['password'])
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({'message': 'User created successfully'}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    print("Headers:", request.headers)  # Log headers
    print("Raw data:", request.data)  # Log raw request body
    
    data = request.get_json()
    print("Parsed JSON:", data)  # Log parsed JSON

    if not data or 'email' not in data or 'password' not in data:
        return jsonify({'message': 'Missing email or password'}), 400

    user = User.query.filter_by(email=data['email']).first()

    if user and user.check_password(data['password']):
        access_token = create_access_token(identity=str(user.id))
        return jsonify({'token': access_token, 'user_id': user.id}), 200

    return jsonify({'message': 'Invalid credentials'}), 401

