from mongoengine import Document, StringField, BooleanField, DictField, ListField

class User(Document):
    username = StringField(unique=True, required=True)
    email = StringField(unique=True, required=True)
    password = StringField(required=True)
    subscribed = BooleanField(default=False)

class Subscription(Document):
    username = StringField(unique=True, required=True)
    isActive = BooleanField(default=False)
    preference = DictField(default=None)
    address = DictField(default=None)
    orderHistory = ListField(DictField(), default=None)
    