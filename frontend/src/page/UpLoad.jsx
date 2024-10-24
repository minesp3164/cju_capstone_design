import React, {useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import WebcamCapture from "../component/WebcamCapture";
import { Button, Tooltip} from "react-daisyui";
import axiosServer from "../component/Instance";



const UpLoad = () => {
  const [canNext, setCanNext] = React.useState(false);
  const [checked, setChecked] = React.useState("");
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [isPictured , setIsPictured] = React.useState(false);
  const [showImage,setShowImage] = React.useState(null);
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [alertMessage , setAlertMessage] = useState("");

  const Alert = () => {
    if (alert){
      return (
        <div role="alert" className="alert alert-error text-center  w-full h-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current  shrink-0 h-6 w-6" fill="none"
               viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span className="font-bold">{alertMessage} 사진을 다시 올려주세요!!!</span>
        </div>
      );
    }
  };


  const goToMainPage = () => {
    navigate("/");
  };

  let data = {};
  const onClick = (e) => {
    if (e.target.id === "사진") {
      if (checked !== "사진") {
        setChecked("사진");
        setSelectedFile(null);
        setShowImage(null);
        setCanNext(false);
        setIsPictured(false)
      }
    } else {
      if (checked !== "캠") {
        setChecked("캠");
        setSelectedFile(null);
        setShowImage(null);
        setCanNext(false);
        setIsPictured(false)
      }
    }
  };
  const handleDataFromCapture = (data) => {
    setSelectedFile(data);
    setIsPictured(true)
    setCanNext(true); // 다음 단계로 진행 가능하도록 설정
  };

  const Item = (props) => {
    const inputRef = useRef()

    if (props.checked === "사진") {
      return <div className="pt-10">
        <label className="block mb-2 text-sm font-bold text-gray-300" for="image">정면을 보고 있으며 한 사람만 나와야 합니다</label>
        <div className=" flex justify-center items-center">
          <Tooltip message="본인의 얼굴이 제대로 나오고 혼자 있는 사진을 첨부해주세요" position="bottom">
            <Button className="w-[128px] h-[64px] text-black font-bold text-lg  bg-gray-50 hover:text-gray-600 active:text-gray-400"
              onClick={() => inputRef.current?.click()}
              >
                파일 업로드
              </Button>
              <input type="file" id="image" accept="image/*" onChange={props.onChange} style={{ display: "none" }} ref={inputRef} />
          </Tooltip>
        </div>
      </div>
    } else if (props.checked === "캠") {
      if(!isPictured){
        return <WebcamCapture toUpload={handleDataFromCapture} isPicktured={isPictured}/>
      } else{
        return null
      }
    } else {
      return <span className="text-xl font-bold">위 중 하나 선택해주세요</span>
    }
  };

  const ShowImages = () =>{
    if(selectedFile){
      if(checked === "사진"){
        console.log(showImage)
        return <img src={showImage} alt="이미지" className="w-[512px] h-[360px] border-2 border-gray-500 rounded-lg box-shadow-md"/>
      }
      if(checked==="캠"){
        console.log(showImage)
        onChangeCaptureShow()
        return (
        <div>
          <img src={showImage} alt="웹캠캡처" className="w-[512px] h-[360px] border-2 border-gray-500 rounded-lg box-shadow-md"/>
          <ReCaptureButton/>
        </div>
        )
      }
    }
    else{
        return null
    }
  };
  const goToNextPage = () => {
    localStorage.setItem("upload","upload");
    console.log(data)
    navigate('/result', {state: data});

  };

  const onChangeCaptureShow = () => {
    const file = selectedFile;
    if(file){
      const reader = new FileReader();
      reader.onload = () => {
        setShowImage(reader.result);
      }
      reader.readAsDataURL(file);
    }
  };

  const onChangeImageUpload = (e) => {
    setSelectedFile(e.target.files[0]);
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
      await axiosServer.post('/upload', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    ).then(response => {
          const recommendation = response.data.recommendation
          const is_person = response.data.person
          console.log(response.data)
          data =
          {
            recommendation : recommendation
          };
        if(is_person){
          goToNextPage()
        }else {
          setAlert(true)
          setAlertMessage("사람이거나 한명이 있어야합니다!!!")
        }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleRepicture = () =>{
    setIsPictured(false);
    setShowImage(null);
    setSelectedFile(null);
  }
  const ReCaptureButton = () => {
    if(checked ==="캠"){return<Button className="w-[512px] h-[64px] font-bold text-lg "onClick={handleRepicture} disabled={!isPictured}>다시 찍기</Button>}
    return null
  }

  return (
    <div className="w-full p-20 bg-white bg-opacity-90  rounded-lg shadow-lg max-w-screen-xl max-h-screen-lg">
      <div className=" flex justify-center items-center">
        <p  className="text-black font-bold text-2xl ">업로드 할 파일 유형을
          선택하세요</p>
      </div>
      <div className="flex justify-center p-10">
        <Button id="사진" className="w-[128px] h-[64px] rounded-xl bg-gray-100 hover:bg-gray-200 mr-10" onClick={onClick}>
          <i id="사진" className="text-3xl fa-solid fa-image"/>
        </Button>
        <Button id="캠" className="w-[128px] h-[64px] rounded-xl bg-gray-100 hover:bg-gray-200" onClick={onClick}>
          <i id="캠" className="text-3xl fa-solid fa-camera"></i>
        </Button>
      </div>
      <div className="flex justify-center items-center pb-10">
        <Item checked={checked} onChange={onChangeImageUpload}/>
      </div>

      <div className="flex justify-center items-center">
        <ShowImages/>
      </div>
      <div className="flex justify-center items-center">
        <Button className="w-[128px] h-[64px] text-black font-bold text-lg "
                onClick={handleUpload} disabled={!canNext}>다음으로
        </Button>
        <div className="pt-10">
          <Alert/>
        </div>
      </div>
    </div>
  );
};

export default UpLoad;
