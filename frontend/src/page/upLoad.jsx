import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import WebcamCapture from "../component/WebcamCapture";
import swal from "sweetalert";



const UpLoad = () => {
  const [canNext, setCanNext] = React.useState(false);
  const [checked, setChecked] = React.useState("");
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [showImage,setShowImage] = React.useState(null);
  const [camCapture,setCamCapture] = React.useState(null);
  const navigate = useNavigate();
  const goToMainPage = () =>{
    navigate("/");
  }
  if(!localStorage.getItem("start")){
    swal({
      title:"에러",
      text:"이전 단계는 모두 끝내고 오셨나요?",
      icon:"warning",
      button:"처음으로 돌아가기"
    }).then((result) => {
      goToMainPage()
      localStorage.clear()
    })
    localStorage.clear()


  }

  const onClick = (e) => {
    if (e.target.id === "사진") {
      if (checked !== "사진") {
        setChecked("사진");
        setSelectedFile(null)
        setCanNext(false)
      }
    } else {
      if (checked !== "캠") {
        setChecked("캠");
        setSelectedFile(null)
        setCanNext(false)
      }
    };
  }
  const handleDataFromCapture = (data) =>{
    setSelectedFile(data)
    setCanNext(data)
    setCamCapture(data)
  }

  const Item = (props) => {
    if (props.checked === "사진") {
      return <div className="pt-10">
        <label className="block mb-2 text-sm font-medium" for="image">업로드 할 이미지</label>
        <input
          className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="file_input_help" type="file" id="image" accept="image/*" onChange={props.onChange}/>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">본인의 얼굴이 제대로 나온 사진</p>
      </div>
    } else if (props.checked === "캠") {
      return <WebcamCapture toUpload={handleDataFromCapture}/>
    } else {
      return "위 중 하나 선택해주세요";
    }
  };

  const ShowImages = () =>{
    if(selectedFile){
      if(checked === "사진"){
        return <img src={showImage} alt="이미지" className="w-96 h-64"/>
      }
      if(checked==="캠"){
        return <img src={camCapture} alt="웹캠캡처" className="w-96 h-64"/>
      }
    }
    else{
        return null
    }
  }


  const goToNextPage = () => {
    localStorage.setItem("upload","upload")
    navigate('/result');
  };

  const onChangeImageUpload = (e) => {
    setSelectedFile(e.target.files[0])
    const file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = () => {
        setShowImage(reader.result);
      }
      reader.readAsDataURL(file);
    }
    setCanNext(true);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
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
          <i id="사진" className="text-3xl fa-solid fa-image" onClick={onClick}/>
        </button>
        <button id="캠" className="w-36 h-24 bg-gray-200 hover:bg-gray-100" onClick={onClick}>
          <i id="캠" className="text-3xl fa-solid fa-video" onClick={onClick}/>
        </button>
      </div>
      <div className="flex justify-center pb-10">
        <Item checked={checked} onChange={onChangeImageUpload}/>
      </div>
      <div className="flex justify-center items-center">
        <ShowImages/>
      </div>
        <button className="bg-gray-200 w-36 h-16"
                onClick={handleUpload} disabled={!canNext}>다음으로</button>
    </div>
  );
};

export default UpLoad;