import ReactAudioPlayer from "react-audio-player";

const BackgroundAudio = () => {
  return (
    <ReactAudioPlayer
      src={require('../assets/audio/backgroundAudio.mp3')}
      autoPlay
      loop
      volume={0.5}
      style={{ display: 'none' }}
    />
  );
};

export default BackgroundAudio;
