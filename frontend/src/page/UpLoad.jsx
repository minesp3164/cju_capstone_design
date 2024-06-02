import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import WebcamCapture from "../component/WebcamCapture";
import { Button, Tooltip } from "react-daisyui";
import swal from "sweetalert";
import axiosServer from "../component/Instance";



const UpLoad = () => {
  const [canNext, setCanNext] = React.useState(false);
  const [checked, setChecked] = React.useState("");
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [showImage,setShowImage] = React.useState(null);
  const navigate = useNavigate();

  const goToMainPage = () =>{
    navigate("/");
  }

  let data = {};
  if(!localStorage.getItem("start")){
    swal({
      title:"에러",
      text:"이전 단계는 모두 끝내고 오셨나요?",
      icon:"warning",
      button:"처음으로 돌아가기"
    }).then((result) => {
      goToMainPage()
      localStorage.clear();
    })
    localStorage.clear();
  }

  const onClick = (e) => {
    if (e.target.id === "사진") {
      if (checked !== "사진") {
        setChecked("사진");
        setSelectedFile(null);
        setShowImage(null);
        setCanNext(false);
      }
    } else {
      if (checked !== "캠") {
        setChecked("캠");
        setSelectedFile(null);
        setShowImage(null);
        setCanNext(false);
      }
    }
  }

  const handleDataFromCapture = (data) => {
    setSelectedFile(data);
    setCanNext(true); // 다음 단계로 진행 가능하도록 설정
  };

  const Item = (props) => {
    const inputRef = useRef()

    if (props.checked === "사진") {
      return <div className="pt-10">
        <label className="block mb-2 text-sm font-bold text-gray-300" for="image">정면을 보고 있으며 한 사람만 나와야 합니다</label>
        <Tooltip message="본인의 얼굴이 제대로 나오고 혼자 있는 사진을 첨부해주세요" position="bottom">
          <Button className="w-32 h-16"
            onClick={() => inputRef.current?.click()}
            >
              파일 업로드
            </Button>
            <input type="file" id="image" accept="image/*" onChange={props.onChange} style={{ display: "none" }} ref={inputRef} />
        </Tooltip>

      </div>
    } else if (props.checked === "캠") {
      return <WebcamCapture toUpload={handleDataFromCapture}/>
    } else {
      return "위 중 하나 선택해주세요"
    }
  };

  const ShowImages = () =>{
    if(selectedFile){
      if(checked === "사진"){
        console.log(showImage)
        return <img src={showImage} alt="이미지" className="w-96 h-64 rounded-lg box-shadow-md"/>
      }
      if(checked==="캠"){
        console.log(showImage)
        onChangeCaptureShow()
        return <img src={showImage} alt="웹캠캡처" className="w-96 h-64"/>
      }
    }
    else{
        return null
    }
  }


  const goToNextPage = () => {
    localStorage.setItem("upload","upload");
    navigate('/result', {data:data});

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
  }
  const onChangeImageUpload = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0]);
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
      const response = await axiosServer.post('/upload', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    ).then(response => {
          const recommendation = response.data.recommendation
          const is_person = response.data.person
          data = [
          {
            recommendation: recommendation[0]
          },
          {
            recommendation: recommendation[1]
          },
          {
            recommendation: recommendation[2]
          },
          {
            is_person: is_person
          }
        ];
        console.log(data)
        console.log(is_person)
        goToNextPage()
        }
      );
        // goToNextPage();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="space-y-4 p-4 text-center items-center">
      <h2 className="text-2xl pb-12 text-white">업로드 할 파일 유형을 선택하세요</h2>
      <div className="flex lg:px-80 md:px-20 sm:px-28 justify-between items-stretch">
        <Button id="사진" className="w-36 h-24 rounded-xl bg-gray-100 hover:bg-gray-200" onClick={onClick}>
          <i id="사진" className="text-3xl fa-solid fa-image" onClick={onClick}/>
        </Button>
        <Button id="캠" className="w-36 h-24 rounded-xl bg-gray-100 hover:bg-gray-200" onClick={onClick}>
          <i id="캠" className="text-3xl fa-solid fa-video" onClick={onClick}/>
        </Button>
      </div>
      <div className="flex justify-center pb-10">
        <Item checked={checked} onChange={onChangeImageUpload}/>
      </div>
      <div className="text-gray-50">
        <i className="fa-regular fa-circle-down"/>올라갈 사진<i className="fa-regular fa-circle-down"/>
      </div>
      <div className="flex justify-center items-center">
        <ShowImages/>
      </div>
      <div className="pt-5">
        <Button className="w-36 h-16  font-medium"
          onClick={handleUpload} disabled={!canNext}>다음으로
        </Button>
      </div>
    </div>
  );
};

export default UpLoad;
