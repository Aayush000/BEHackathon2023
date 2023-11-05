// HomePage.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate
import backgroundImage from "../images/background.jpg";
import microphoneImage from "../images/microphone.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate(); // use useNavigate for navigation

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/question-page"); // use navigate to go to the next page
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="app" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Link to="/question-page">
        <img
          src={microphoneImage}
          alt="Microphone"
          className="microphone-logo"
        />
      </Link>
      {/* Your homepage content */}
    </div>
  );

  // ... rest of your component
};

export default HomePage;
