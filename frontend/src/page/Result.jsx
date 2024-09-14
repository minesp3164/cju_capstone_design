import React, { useState, useEffect } from 'react';
import swal from "sweetalert";
import { useLocation, useNavigate } from "react-router-dom";
import { Button ,Alert} from 'react-daisyui';
import axiosServer from "../component/Instance";

const Result = () => {
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.recommendation
  const goToMainPage = () => navigate("/");
  const goToUpLoadPage = () => navigate("/upLoad");
  const goToDetailPage = () => navigate("/Process_Image");
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
      const response = await axiosServer.get('/result');
      console.log(response.data)
      setImage(response.data.images)

    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    checkPreviousSteps();
    fetchImages();
  }, [goToMainPage, goToUpLoadPage]);

  return (
    <div className="h-full w-full text-gray-100 ">
      <div className="text-center font-bold">
        <h2 className=''>
          <div className='text-lg pt-1'> 사용자의 얼굴형 </div>
          <div className='text-2xl pt-1'>{data.shape}</div>
        </h2>
        <h3 className='p-4'>
          <div className='text-lg pt-1'>추천드리는 헤어스타일 </div>
          <div className='text-2xl pt-1'>{data.name}</div>
        </h3>
        <div><i className="fa-regular fa-circle-down" aria-hidden="true"></i>예시 사진<i
          className="fa-regular fa-circle-down" aria-hidden="true"></i></div>
        <div className="flex justify-center">
          {image && <img
            className="w-96 h-64"
            src={`data:image/jpeg;base64,${image}`}
            alt="image"/>}
        </div>
      </div>
      <div className='flex justify-center pt-10'>
        <Button className='font-bold text-xl w-36 h-16' onClick={goToDetailPage}>
          합성하기
        </Button>
      </div>
      { alert ? null : Alert()}
    </div>
  );
}

export default Result;
