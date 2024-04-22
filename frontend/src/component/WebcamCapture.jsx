import Webcam from "react-webcam";
import React from "react";


const videoConstraints = {
  width: 960,
  height: 640,
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
    <div className="flex flex-col align-center pt-20">
      <Webcam
        className="border-2 border-gray-500"
        audio={false}
        height={320}
        width={480}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <button onClick={capture} className="h-full w-full border-2 bg-gray-200">캡처하기</button>
      <p className="pt-10 text-xl"><i class="text-gray-700  fa-regular fa-circle-down"/>올라갈 사진<i className="text-gray-700 fa-regular fa-circle-down"/></p>
    </div>
  );
};
export default WebcamCapture;