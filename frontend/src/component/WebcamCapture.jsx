import Webcam from "react-webcam";
import React from "react";

const videoConstraints = {
  width: 480,
  height: 320,
  facingMode: "user"
};

const WebcamCapture = ({ toUpload }) => {
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(async () => {
    const data = webcamRef.current.getScreenshot();
    const fileName = "capture.jpg";
    const blobData = await (await fetch(data)).blob();
    const file = new File([blobData], fileName, { type: 'image/jpeg' });

    toUpload(file);
  }, [webcamRef, toUpload]);

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
      <p className="pt-10 text-xl"></p>
    </div>
  );
};

export default WebcamCapture;
