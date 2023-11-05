import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FlightTable from './flightTable';
import '/Users/ashahopkins/Desktop/hackathon/BEHackathon2023/Frontend/src/App.css'; // Import the CSS file
import Header from './Header.js'

const FlightPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate("/fourth-page");
      }, 5000);

      return () => clearTimeout(timer);
    }, [navigate]);
    
  return (
    <div className="FlightPage">
      <Header/>
      <FlightTable />
    </div>
  );
}

export default FlightPage;

// import backgroundImage from "../images/questions.png"; // Path to the background image

// const QuestionPage = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigate("/flight-page");
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, [navigate]);

//   return (
//     <div
//       className="questionsPage"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       {/* Your component content */}
//     </div>
//   );
//   // ... rest of your component
// };

// export default QuestionPage;
