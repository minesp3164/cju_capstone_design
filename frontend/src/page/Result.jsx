import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from "sweetalert";
import {useLocation, useNavigate} from "react-router-dom";
import { Button } from 'react-daisyui';

const Result = () => {
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const desc = location.state.desc;
  const name = location.state.name;
  const shape = location.state.shape;
  const is_person = location.state.is_person;
  const goToMainPage = () => navigate("/");
  const goToUpLoadPage = () => navigate("/upLoad");
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
      <div className="text-center font-bold">
        <h2 className=''>
          당신의 얼굴형은 
          <div className='text-lg pt-1'>{shape}</div>
        </h2>
        <h3 className='p-4'>
          어울리는 헤어스타일 
          <div className='text-lg pt-1'>{name}</div>
          {is_person}
        </h3>
        <h4 className=''>
          헤어스타일 설명 : {desc}
        </h4>
      </div>
      <div className="flex justify-center mt-[50px]">
        {image && <img
          className="w-[350px] h-[350px] rounded-md shadow-lg"
          src={`data:image/jpeg;base64,${image}`}
          alt="image"/>}
      </div>
      <div className='flex justify-center pt-10'>
          <Button className='font-bold w-[150px] h-[50px]' onClick={goToMainPage}>
            처음으로 돌아가기
          </Button>
      </div>
    </div>
  );
}

export default Result;
