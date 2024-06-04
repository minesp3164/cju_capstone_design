import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from "sweetalert";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from 'react-daisyui';
import ImageDisplay from '../component/ImageDisplay';
import axiosServer from "../component/Instance";

const Result = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state
  console.log(data)
  const goToMainPage = () => navigate("/");
  const goToUpLoadPage = () => navigate("/upLoad");

  const checkPreviousSteps = () => {
    if (!localStorage.getItem("upload")) {
      if (localStorage.getItem("start")) {
        swal({
          title: "에러",
          text: "업로드를 안하고 오셨군요",
          icon: "warning",
          button: "업로드 페이지로 돌아가기",
        }).then((result) => {
          goToUpLoadPage();
        });
      } else {
        swal({
          title: "에러",
          text: "이전 단계는 모두 끝내고 오셨나요?",
          icon: "warning",
          button: "처음으로 돌아가기"
        }).then((result) => {
          goToMainPage();
        });
      }
    }
  };

  const fetchImages = async () => {
    try {
      const response = await axios.get('/result');
      console.log(response.data);

    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    checkPreviousSteps();
    fetchImages();
  }, [goToMainPage, goToUpLoadPage]);

  return (
    <div className="h-full w-full">
      <div className="text-center font-bold">
        <h2 className=''>
          <div className='text-lg pt-1'>{}</div>
        </h2>
        <h3 className='p-4'>
          <div className='text-lg pt-1'>{}</div>
        </h3>
        <h4 className=''>{}</h4>
      </div>
      {/*<ImageDisplay images={images} />*/}
      <div className='flex justify-center pt-10'>
        <Button className='font-bold w-[150px] h-[50px]' onClick={goToMainPage}>
          처음으로 돌아가기
        </Button>
      </div>
    </div>
  );
}

export default Result;
