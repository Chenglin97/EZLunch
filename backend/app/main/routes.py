from flask import request, jsonify
from . import main

@main.route('/')
def home():
    return jsonify({'message': 'Hello World'})

@main.route('/login', methods=['GET'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    #TODO replace with actual login logic
    if username == 'test' and password == 'test':
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 401
    