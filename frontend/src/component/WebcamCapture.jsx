import Webcam from "react-webcam";
import React from "react";


const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const WebcamCapture = ({toUpload}) => {
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(
    () => {
      const data  = webcamRef.current.getScreenshot()
      toUpload(data)
    },
    [webcamRef,toUpload]
  );
  return (
    <div className="flex ">
      <Webcam
        audio={false}
        height={720}
        width={1280}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </div>
  );
};
export default WebcamCapture;