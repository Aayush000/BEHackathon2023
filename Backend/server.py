from flask import Flask
from speech_to_text import get_booking_details
from flask_cors import CORS


api = Flask(__name__)
CORS(api)  # Allow CORS for all routes

@api.route("/")
def my():
    response_body = {
        "name": "Welcome to Airey",
        "about": "AI Assistance Model"
    }

    return response_body

@api.route("/api/booking-detail/eng")
def get_eng_details():
    booking_parameters = get_booking_details()
    return booking_parameters

@api.route("/api/booking-detail/nep")
def get_nep_details():
    booking_param = get_booking_details(isNepali=True)
    return booking_param

if __name__ == '__main__':
    api.run(debug=True, port=3000)