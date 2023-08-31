from mongoengine import Document, StringField

class User(Document):
    name = StringField(unique=True, required=True)
    email = StringField(unique=True, required=True)
    password = StringField(required=True)
