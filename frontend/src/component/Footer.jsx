import React, { useState, useEffect } from "react";
import AudioPlayer from 'react-h5-audio-player';
import backgroundAudio2 from '../assets/audio/backgroundAudio2.mp3';
import 'react-h5-audio-player/lib/styles.css';

const audioTracks = [backgroundAudio2];

const Footer = () => {
  const [muted, setMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    setMuted(true);
    const randomIndex = Math.floor(Math.random() * audioTracks.length);
    setCurrentTrack(audioTracks[randomIndex]);
  }, []);

  return (
    <div className="flex justify-center items-center">
      {currentTrack && (
        <AudioPlayer
          src={currentTrack}
          autoPlay={true}
          loop
          muted={muted}
        />
      )}
    </div>
  );
}

export default Footer;
