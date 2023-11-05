// FourthPage.js
import React from "react";
import backgroundImage from "../images/thankyou.png"; // Path to the background image
import "../CSS/ThankyouPage.css"; // You can create a separate CSS file for your App component

const Thankyou = () => {
  return (
    <div
      className="thankyou"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Your component content */}
    </div>
  );
};

export default Thankyou;
