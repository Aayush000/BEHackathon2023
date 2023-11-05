import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import flightDetails from "../images/flightdetails.jpeg"
import voiceGif from "../images/voiceGif.gif"
import "../App.css"

const FourthPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/payment");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container">
      <img src={flightDetails} alt="Details" className="details" />
      <img src={voiceGif} alt="voiceGif" className="voiceGif" />
    </div>
  );
};
export default FourthPage;
