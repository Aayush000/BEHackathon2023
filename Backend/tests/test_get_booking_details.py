import unittest
import re
from speech_to_text.speech_to_text import get_booking_details

class TestFlightBookingDetails(unittest.TestCase):

    def check_iata_code(self, code):
        """ Check if the given string is a valid IATA airport code format """
        return re.match(r'^[A-Z]{3}$', code) is not None

    def check_date_format(self, date):
        """ Check if the given string is in YYYY-MM-DD format """
        return re.match(r'^\d{4}-\d{2}-\d{2}$', date) is not None

    def test_get_booking_details_english(self):
        # Test the function with an English conversation
        booking_details = get_booking_details(isNepali=False)
        self.assertIn('origin', booking_details)
        self.assertIn('destination', booking_details)
        self.assertIn('departure_date', booking_details)

        # Check if the origin and destination are valid IATA codes
        self.assertTrue(self.check_iata_code(booking_details['origin']))
        self.assertTrue(self.check_iata_code(booking_details['destination']))

        # Check if the departure date is in the correct format
        self.assertTrue(self.check_date_format(booking_details['departure_date']))

    def test_get_booking_details_nepali(self):
        # Test the function with a Nepali conversation
        booking_details = get_booking_details(isNepali=True)
        self.assertIn('origin', booking_details)
        self.assertIn('destination', booking_details)
        self.assertIn('departure_date', booking_details)

        # Check if the origin and destination are valid IATA codes
        self.assertTrue(self.check_iata_code(booking_details['origin']))
        self.assertTrue(self.check_iata_code(booking_details['destination']))

        # Check if the departure date is in the correct format
        self.assertTrue(self.check_date_format(booking_details['departure_date']))

if __name__ == '__main__':
    unittest.main()
