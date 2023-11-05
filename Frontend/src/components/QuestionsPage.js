import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/QuestionsPage.css"; // You can create a separate CSS file for your App component
import backgroundImage from "../images/questions.png"; // Path to the background image

const QuestionPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/third-page");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="questionsPage"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Your component content */}
    </div>
  );
  // ... rest of your component
};

export default QuestionPage;
