from flask import request, jsonify, current_app as app
from . import main
from ..models import User

@main.route('/')
def home():
    return jsonify({'message': 'Hello World'})

@main.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        email = data.get('email')
        if(username is None or password is None or email is None):
            return jsonify({'message': 'Missing required fields'}), 400
        
        user = User(name=username, email=email, password=password)
        try:
            user.save()
        except Exception as e:
            app.logger.error(e)
            return jsonify({'message': 'User already exists'}), 409
        
        return jsonify({'message': 'User registered'})
    except:
        return jsonify({'message': 'Registration failed'}), 500

@main.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')

        user = User.objects(name=username).first()
        if user is None:
            return jsonify({'message': 'User not found'}), 404
        if user.password != password:
            return jsonify({'message': 'Incorrect password'}), 401
        return jsonify({'message': 'User logged in'})
    except:
        return jsonify({'message': 'Login failed'}), 500
    
@main.route('/subscribe', methods=['POST'])
def subscribe():
    try:
        data = request.get_json()
        username = data.get('username')
        user = User.objects(name=username).first()
        if user is None:
            return jsonify({'message': 'Subscribe failed: User not found'}), 404
        
        if user.subscribed:
            return jsonify({'message': 'Subscribe failed: User already subscribed'}), 409
            
        user.subscribed = True
        user.save()
        return jsonify({'message': 'User subscribed'})
    except:
        return jsonify({'message': 'Subscribe failed'}), 500
    
@main.route('/unsubscribe', methods=['POST'])
def unsubscribe():
    try:
        data = request.get_json()
        username = data.get('username')
        user = User.objects(name=username).first()
        if user is None:
            return jsonify({'message': 'Unsubscribe failed: User not found'}), 404
        
        if not user.subscribed:
            return jsonify({'message': 'Unsubscribe failed: User not subscribed'}), 409

        user.subscribed = False
        user.save()
        return jsonify({'message': 'User unsubscribed'})
    except:
        return jsonify({'message': 'Unsubscribe failed'}), 500