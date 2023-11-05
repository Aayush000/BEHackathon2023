// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage"; // Adjust the path if necessary
import NextPage from "./components/NextPage"; // Make sure this path is correct
import QuestionsPage from "./components/QuestionsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question-page" element={<QuestionsPage />} />
        <Route path="/next-page" element={<NextPage />} />
        {/* Define other Routes here if necessary */}
      </Routes>
    </Router>
  );
};

export default App;

// import React from "react";
// import "./App.css"; // You can create a separate CSS file for your App component
// import backgroundImage from "./images/background.jpg"; // Path to the background image
// import microphoneImage from "./images/microphone.png";
// import QuestionsPage from "./components/QuestionsPage";

// const App = () => {
//   return (
//     <div className="app" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <img src={microphoneImage} alt="Microphone" className="microphone-logo" />
//       {/* Your component content */}
//     </div>
//     // <QuestionsPage />
//   );
// };

// export default App;

// import { useState } from 'react'
// import axios from "axios";
// import './App.css';

// function App() {

//    // new line start
//   const [profileData, setProfileData] = useState(null)

//   function getData() {
//     axios({
//       method: "GET",
//       url:"/api/",
//     })
//     .then((response) => {
//       const res =response.data
//       setProfileData(({
//         profile_name: res.name,
//         about_me: res.about}))
//     }).catch((error) => {
//       if (error.response) {
//         console.log(error.response)
//         console.log(error.response.status)
//         console.log(error.response.headers)
//         }
//     })}
//     //end of new line

//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* new line start*/}
//         <p>To get your profile details: </p><button onClick={getData}>Click me</button>
//         {profileData && <div>
//               <p>Profile name: {profileData.profile_name}</p>
//               <p>About me: {profileData.about_me}</p>
//             </div>
//         }
//          {/* end of new line */}
//       </header>
//     </div>
//   );
// }

// export default App;
