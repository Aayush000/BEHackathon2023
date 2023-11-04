from flask import Flask

api = Flask(__name__)


@api.route("/api/")
def my_profile():
    response_body = {
        "name": "Dummy",
        "about": "Lorem ipsum"
    }

    return response_body


@api.route("/")
def my():
    response_body = {
        "name": "Hello",
        "about": "There"
    }

    return response_body
