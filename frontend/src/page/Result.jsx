import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from "sweetalert";
import {useNavigate} from "react-router-dom";

const Result = () => {
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();
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


  return (
    <div>
    </div>
  );
}

export default Result;