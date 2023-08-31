from flask import Flask
from mongoengine import connect

def create_app():
    app = Flask(__name__)
    app.config["MONGO_URI"] = "mongodb://db:27017/ez-lunch"

    connect(db='ez-lunch', host='host.docker.internal', port=27017)

    from app.main import main
    app.register_blueprint(main)

    return app