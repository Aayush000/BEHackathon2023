import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import FlightTable from "./flightTable";
import "../App.css"; // Import the CSS file
import Header from "./Header.js";

// Import your audio files
import audioFile1 from "../audio/carl4.mp3";
import emptyFile from "../audio/sec6.mp3";


const FlightPage = () => {
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
      navigate("/fourth-page");
    }, 11000);

    return () => {
      clearTimeout(navigationTimer);
    };
  }, [navigate]);

  return (
    <div className="FlightPage">
      <button onClick={handlePlaySoundSequence}>?</button>
      <Header />
      <FlightTable />
      <img src={voiceGif} alt="voiceGif" className="voiceGif" />
    </div>
  );
};

export default FlightPage;
