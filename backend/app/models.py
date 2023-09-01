from mongoengine import Document, StringField, BooleanField, ObjectField, ArrayField

class User(Document):
    username = StringField(unique=True, required=True)
    email = StringField(unique=True, required=True)
    password = StringField(required=True)
    subscribed = BooleanField(default=False)

class Subscription(Document):
    username = StringField(unique=True, required=True)
    isActive = BooleanField(default=False)
    preference = ObjectField(default=None)
    address = ObjectField(default=None)
    orderHistory = ArrayField(ObjectField(), default=None)
    