import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from "sweetalert";
import {useLocation, useNavigate} from "react-router-dom";

const Result = () => {
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const desc = location.state.desc;
  const name = location.state.name;
  const shape = location.state.shape;

  const goToMainPage = () => {
    navigate("/");
  }

  const goToUpLoadPage = () => {
    navigate("/upLoad");
  }

  if(!localStorage.getItem("upload")){
    if(localStorage.getItem("start")){
      swal({
        title:"에러",
        text:"업로드를 안하고 오셨군요",
        icon:"warning",
        button:"업로드 페이지로 돌아가기",
      }).then((result) =>{
        goToUpLoadPage()
      })
    }
    else{
      swal({
        title:"에러",
        text:"이전 단계는 모두 끝내고 오셨나요?",
        icon:"warning",
        button:"처음으로 돌아가기"
      }).then((result) => {
        goToMainPage()
      })
    }
  }

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('/result');
        setImage(response.data.image);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };
    fetchImage();
  }, []);


  return (
    <div className="h-full w-full">
      <div className="flex justify-center">
        {desc}{shape}{name}
      </div>
      <div className="flex justify-center mt-[50px]">
        {image && <img
                      className="w-[350px] h-[350px] rounded-md shadow-lg"
                       src={`data:image/jpeg;base64,${image}`}
                       alt="image"/>}
      </div>
    </div>
  );
}

export default Result;