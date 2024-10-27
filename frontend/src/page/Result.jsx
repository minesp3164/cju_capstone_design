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
  const goToDetailPage = () => navigate("/process_Image",{state: {from: '/result'}});
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
    <div className="w-full p-10 bg-white bg-opacity-90 rounded-lg shadow-2lg max-w-screen-xl max-h-screen-lg  ">
      <div className="text-center font-bold">
        <div className=''>
          <div className='text-2xl p-2 font-black'> 사용자의 얼굴형 </div>
          <Button disabled="disabled" className='text-2xl disabled:bg-gray-200 disabled:text-black'>{data.face_shape}</Button>
        </div>
        <div className='p-4'>
          <div className='text-2xl p-2 font-black'>추천드리는 헤어스타일 </div>
          <Button  disabled="disabled" className='text-2xl disabled:bg-gray-200 disabled:text-black'>{data.name}</Button>
        </div>
        <div className="pb-2">
          <i className="fa-regular fa-circle-down" aria-hidden="true"/> 미용 예상 결과물 <i
          className="fa-regular fa-circle-down" aria-hidden="true"/>
        </div>
        <div className="flex justify-center">
          {image && <img
            className="w-[384px] h-[384px] border-2 border-black rounded-lg"
            src={`data:image/jpeg;base64,${image}`}
            alt="image"/>}
        </div>
      </div>
      <div className='flex justify-center pt-10'>
        <Button className='w-[190px] h-[70px] font-bold bg-gray-800 text-white hover:bg-gray-900 text-4xl' onClick={goToDetailPage}>
          미용하기
        </Button>
      </div>
      { alert ? null : Alert()}
    </div>
  );
}

export default Result;
