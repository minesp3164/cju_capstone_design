import Webcam from "react-webcam";
import React from "react";
import { Button } from "react-daisyui";

const videoConstraints = {
  width: 1024,
  height: 1024,
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
        height={480}
        width={480}
        ref={webcamRef}
        mirrored={true}
        screenshotQuality={1}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <Button onClick={capture} className="border-2 bg-gray-50 rounded-lg">캡처하기</Button>
    </div>
  );
};

export default WebcamCapture;
