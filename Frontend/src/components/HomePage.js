// HomePage.js
import React from "react";
import backgroundImage from "../images/background.jpg";
import microphoneImage from "../images/microphone.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="app" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Link to="/next-page">
        <img
          src={microphoneImage}
          alt="Microphone"
          className="microphone-logo"
        />
      </Link>
      {/* Your homepage content */}
    </div>
  );
};

export default HomePage;
