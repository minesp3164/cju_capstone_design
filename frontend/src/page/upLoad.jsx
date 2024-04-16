import React from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Item = (props) => {
  if (props.checked === "사진") {
    return <input type="file" id="image" accept="image/*" onChange={props.onChange} />;
  } else if (props.checked === "캠") {
    return <Webcam height="32" width="32" />;
  } else {
    return "위 중 하나 선택해주세요";
  }
};

const UpLoad = () => {
  const [canNext, setCanNext] = React.useState(false);
  const [checked, setChecked] = React.useState("");
  const [selectedFile, setSelectedFile] = React.useState(null);

  const navigate = useNavigate();

  const onClick = (e) => {
    if (e.target.id === "사진") {
      setChecked("사진");
    } else {
      setChecked("캠");
    }
  };

  const goToNextPage = () => {
    navigate('/result');
  };

  const onChangeImageUpload = (e) => {
    setSelectedFile(e.target.files[0]);
    setCanNext(true);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile); // 'file'이라는 키로 파일 추가
      const response = await axios.post('/upload', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      goToNextPage();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="space-y-4 p-4 text-center items-center">
      <h2 className="text-2xl pb-12"> 어떤 유형의 파일을 보내시나요</h2>
      <div className="flex lg:px-80 md:px-20 sm:px-12 justify-between items-stretch">
        <button id="사진" className="w-36 h-24 bg-gray-200 hover:bg-gray-100" onClick={onClick}>
          <i className="text-3xl fa-solid fa-image"></i>
        </button>
        <button id="캠" className="w-36 h-24 bg-gray-200 hover:bg-gray-100" onClick={onClick}>
          <i className="text-3xl fa-solid fa-video"></i>
        </button>
      </div>
      <div className="flex justify-center">
        <Item checked={checked} onChange={onChangeImageUpload} />
      </div>
      <p></p>
      <button onClick={handleUpload} disabled={!canNext}>다음으로</button>
    </div>
  );
};

export default UpLoad;