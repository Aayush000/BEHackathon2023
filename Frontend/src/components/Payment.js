import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import "../App.css"; // Import the CSS file
import applePay from "../images/applepay.jpg";

// Import your audio files
import audioFile1 from "../audio/carl6.mp3";
import emptyFile from "../audio/sec3.mp3";

const Payment = () => {
  const navigate = useNavigate();
  const [playAudio1] = useSound(audioFile1, { volume: 0.5 });
  const [playAudio2] = useSound(emptyFile, { volume: 0.5 });

  // State to keep track of the current audio to play
  const [currentAudioIndex, setCurrentAudioIndex] = useState(null);

  // Function to play the next audio file
  useEffect(() => {
    if (currentAudioIndex === null) return; // Do nothing on initial render

    const audioArray = [playAudio1, playAudio2];
    if (currentAudioIndex < audioArray.length) {
      audioArray[currentAudioIndex](); // Play the current audio

      // Set the timeout for the next audio
      const timeoutId = setTimeout(() => {
        // Increment the index to play the next audio
        setCurrentAudioIndex((prevIndex) => prevIndex + 1);
      }, 4000); // 4 second gap between audios

      // Clear the timeout when the component unmounts or when currentAudioIndex changes
      return () => clearTimeout(timeoutId);
    }
  }, [currentAudioIndex, playAudio1, playAudio2]);

  // Start the sequence of playing audios when the button is clicked
  const handlePlaySoundSequence = () => {
    setCurrentAudioIndex(0); // Start with the first audio
  };

  // Set a timer for automatic navigation after all audios have played with gaps
  useEffect(() => {
    // const totalAudioTime = 5000 + 4000 * 3; // Adjust time as needed
    const navigationTimer = setTimeout(() => {
      navigate("/thankyou");
    }, 6000);

    return () => {
      clearTimeout(navigationTimer);
    };
  }, [navigate]);

  return (
    <div>
      <button onClick={handlePlaySoundSequence}>?</button>
      <img src={applePay} alt="applePay" className="applePay" />
    </div>
  );
};

export default Payment;

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import applePay from "../images/applepay.jpg"
// const Payment = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigate("/thankyou");
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, [navigate]);

//   return (
//     <img src={applePay} alt="applePay" className='applePay'/>
//   )
// };
// export default Payment;
