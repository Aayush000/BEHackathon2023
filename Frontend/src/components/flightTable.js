import React, { useState, useEffect } from "react";
import { getFlightData } from "./api";
import FlightCard from "./flightCards";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

// generate price
function generateRandomPrice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generate times

function getRandomTime() {
  // Generate a random time between 00:00 and 23:59
  const randomHours = Math.floor(Math.random() * 24);
  const randomMinutes = Math.floor(Math.random() * 60);
  return { hours: randomHours, minutes: randomMinutes };
}

function calculateArrivalTime(departureTime, flightDuration) {
  let arrivalHours = departureTime.hours + flightDuration.hours;
  let arrivalMinutes = departureTime.minutes + flightDuration.minutes;

  if (arrivalMinutes >= 60) {
    arrivalHours += 1;
    arrivalMinutes -= 60;
  }

  if (arrivalHours >= 24) {
    arrivalHours -= 24;
  }

  return { hours: arrivalHours, minutes: arrivalMinutes };
}

function formatTime(time) {
  let hours = time.hours;
  let minutes = time.minutes;
  let amPm = "AM";

  if (hours >= 12) {
    amPm = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  }

  if (hours === 0) {
    hours = 12; // Convert 0 to 12 for midnight
  }

  // Ensure "0" is prefixed for single-digit hours and minutes
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");

  return `${hours}:${minutes} ${amPm}`;
}

function FlightTable() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    getFlightData().then((data) => {
      const flightsWithPricesAndTimes = data.map((flight) => {
        const randomPrice = generateRandomPrice(60, 300);
        const randomDepartureTime = getRandomTime();
        const arrivalTime = calculateArrivalTime(
          randomDepartureTime,
          flight.duration
        );

        return {
          ...flight,
          price: randomPrice,
          departureTime: randomDepartureTime,
          arrivalTime: arrivalTime,
        };
      });
      setFlights(flightsWithPricesAndTimes);
    });
  }, []);

  return (
    <div className="flight-table">
      <h2>Flight Information</h2>
      <div className="scrollable-cards">
        {flights.map((flight, index) => (
          <FlightCard key={index} flight={flight} />
        ))}
      </div>
    </div>
  );
}

export default FlightTable;
