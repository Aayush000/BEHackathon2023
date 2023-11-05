// FlightCard.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';

function formatTime(time) {
    let hours = time.hours;
    let minutes = time.minutes;
    let amPm = 'AM';
  
    if (hours >= 12) {
      amPm = 'PM';
      if (hours > 12) {
        hours -= 12;
      }
    }
  
    // Ensure "0" is prefixed for single-digit hours and minutes
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
  
    return `${hours}:${minutes} ${amPm}`;
  }
  

function FlightCard({ flight }) {
  return (
    <Card className="card mx-auto custom-card-size">
      <Card.Body>
        <div className="row">
          <div className="col-4">
            <Card.Subtitle className="mb-2 text-muted">
                {flight.origin.code}
            </Card.Subtitle>
          </div>
          <div className="col-4">
            <Card.Subtitle className="mb-2 text-muted">
              {flight.destination.code}
            </Card.Subtitle>
          </div>
          <div className="col-4">
            <Card.Subtitle>
              One way from
            </Card.Subtitle>
          </div>
          
        </div>
        <div className="row mt-2">
          <div className="col-4">
            {formatTime(flight.departureTime)}
          </div>
          <div className="col-4">
            {formatTime(flight.arrivalTime)}
          </div>
          <div className="col-4">
            <strong className='custom-font'>${flight.price}</strong>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-4">
            <strong>Nonstop</strong> 
          </div>
          <div className="col-4">
            {flight.duration.locale}
          </div>
        </div>
        <div className='row mt-4'>
            <div className='col-4'>
                <a href=''>Details</a>
            </div>
            <div className='col-4'>
                <a href=''>Seats</a>
            </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default FlightCard;
