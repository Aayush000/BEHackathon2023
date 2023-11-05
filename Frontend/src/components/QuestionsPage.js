import React from "react";
import "../CSS/QuestionsPage.css"; // You can create a separate CSS file for your App component
import backgroundImage from "../images/questions.png"; // Path to the background image

const QuestionsPage = () => {
  return (
    <div
      className="questionsPage"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Your component content */}
    </div>
  );
};

export default QuestionsPage;
