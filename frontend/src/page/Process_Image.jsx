import { useEffect, useState } from 'react';
import { Loading } from 'react-daisyui';
import axiosServer from "../component/Instance";
import { useLocation, useNavigate } from "react-router-dom";

const Process_Image = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(null); // 에러 상태 추가

  const nextPage = (data) => {
    navigate("/final", { state: { data } });
  };

  const processImages = async () => {
    try {
      const postData = {};
      let address;
      console.log(location)
      if (location.state?.from === '/result') {
        address = '/get_processed_image';
      } else if (location.state?.from === '/final') {
        address = '/get_processed_image';
        if (location.state.id) {
          postData.id = location.state.id; // id가 있을 경우에만 추가
        } else {
          console.warn("ID가 없습니다.");
          return;
        }
      } else {
        console.warn("이전 페이지에 대한 정보가 없습니다.");
        return;
      }

      console.log(address, postData.id);
      const response = await axiosServer.post(address, postData);
      console.log(response.data);
      nextPage(response.data);
    } catch (error) {
      console.error(error.response?.data?.error || error.message);
      setError(error.response?.data?.error || "서버 오류가 발생했습니다."); // 에러 메시지 설정
    }
  };

  useEffect(() => {
    processImages();
  }, [location]);

  return (
    <div className='text-gray-50'>
      <div className="flex justify-center">
        <Loading className="w-[350px] h-[700px] loading-spinner"></Loading>
      </div>
      <div className="flex justify-center">
        <p className="font-bold text-5xl">3~5 분정도 소요됩니다.</p>
      </div>
    </div>
  );
};

export default Process_Image;
