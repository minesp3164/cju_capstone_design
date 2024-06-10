import { useEffect } from 'react';
import { Loading } from 'react-daisyui';
import axiosServer from "../component/Instance";
import { useNavigate } from "react-router-dom";

const Process_Image = () => {
  const navigate = useNavigate();

  const nextPage = (image) => {
    navigate("/final", { state: { image } });
  }

  const processImages = async () => {
    try {
      const response = await axiosServer.post('/get_processed_image');
      console.log(response.data);
      nextPage(response.data);
    } catch (error) {
      console.error(error.response?.data?.error || error.message);
    }
  }

  useEffect(() => {
    processImages();
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <Loading className="w-[500px] h-[1000px] loading-spinner"></Loading>
      </div>
      <div className="flex justify-center">
        <p className="font-bold text-5xl">3~5 분정도 소요됩니다.</p>
      </div>
    </div>
  );
};

export default Process_Image;
