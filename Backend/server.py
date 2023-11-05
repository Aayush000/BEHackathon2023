from flask import Flask
from speech_to_text import get_booking_details

api = Flask(__name__)

@api.route("/")
def my():
    response_body = {
        "name": "Hello",
        "about": "There"
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