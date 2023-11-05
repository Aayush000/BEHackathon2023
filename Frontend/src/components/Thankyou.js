import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import "../App.css"; // Import the CSS file
import backgroundImage from "../images/thankyou.png"; // Path to the background image
import "../CSS/ThankyouPage.css"; // You can create a separate CSS file for your App component

// Import your audio files
import audioFile1 from "../audio/carl7.mp3";

const Thankyou = () => {
  const navigate = useNavigate();
  const [playAudio1] = useSound(audioFile1, { volume: 0.5 });

  // State to keep track of the current audio to play
  const [currentAudioIndex, setCurrentAudioIndex] = useState(null);

  // Function to play the next audio file
  useEffect(() => {
    if (currentAudioIndex === null) return; // Do nothing on initial render

    const audioArray = [playAudio1];
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
  }, [currentAudioIndex, playAudio1]);

  // Start the sequence of playing audios when the button is clicked
  const handlePlaySoundSequence = () => {
    setCurrentAudioIndex(0); // Start with the first audio
  };

  return (
    <div
      className="thankyou"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <button onClick={handlePlaySoundSequence}>?</button>
    </div>
  );
};

export default Thankyou;
