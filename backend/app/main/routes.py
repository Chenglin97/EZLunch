from flask import request, jsonify, current_app as app
from . import main
from ..models import User

@main.route('/')
def home():
    return jsonify({'message': 'Hello World'})

@main.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    user = User(name=username, email=email, password=password)
    try:
        user.save()
    except Exception as e:
        app.logger.error(e)
        return jsonify({'message': 'User already exists'}), 409
    
    return jsonify({'message': 'User registered'})

@main.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.objects(name=username).first()
    if user is None:
        return jsonify({'message': 'User not found'}), 404
    if user.password != password:
        return jsonify({'message': 'Incorrect password'}), 401
    return jsonify({'message': 'User logged in'})
    