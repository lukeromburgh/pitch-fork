from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from flask_cors import cross_origin
from .models import db, User

auth_bp = Blueprint('auth_bp', __name__)
bcrypt = Bcrypt()

# User Registration
@auth_bp.route('/sign-up', methods=['POST'])
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

# User Login (JWT Authentication)
@auth_bp.route('/login', methods=['POST'])
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