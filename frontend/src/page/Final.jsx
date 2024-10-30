import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dataJson from '../assets/data/finaldata.json';
import {Button, Tooltip} from "react-daisyui";
import axiosServer from "../component/Instance";

const Final = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const goToMainPage = () => navigate("/");

  const fetchData = async () => {
    try {
      const response = await axiosServer.get('/get_processed_image_result');
      console.log(response.data);
      if (response.data) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setData(dataJson);
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const goToProcessImage = (id) => {
    navigate("/process_Image", { state: { from: '/final', id: id + 1 } });
  };

  const renderImage = (imageData, index) => (
    <div key={index} className="text-center mx-2">
      <p className="text-black text-center">
        {imageData.name}
      </p>
      <Tooltip message={`${imageData.name}으로 미용해보기`}>
        <img
          className="w-48 h-48 border-2 border-gray-800 rounded-lg cursor-pointer"
          src={`data:image/jpeg;base64,${imageData.image}`}
          alt={`image-${index + 1}`}
          onClick={() => goToProcessImage(index)}
        />
      </Tooltip>
    </div>
  );

  return (
    <div
      className="bg-white pb-4 bg-opacity-90  rounded-lg shadow-lg max-w-screen-lg max-h-screen-lg w-screen text-gray-100">
      <div className="text-center font-bold text-black text-2xl pt-6">
        미용 완료된 사진
      </div>

      <div className="flex justify-center items-center space-x-4 mb-8">
        {data.recommendations && (
          <img
            className="w-96 h-96 border-2 border-gray-800 rounded-lg"
            src={`data:image/jpeg;base64,${data.recommendations.image_syn}`}
            alt="합성된 이미지"
          />
        )}
      </div>

      <div className="flex justify-center pb-2">
        <Button
          className="bg-gray-800 hover:bg-gray-900 text-white text-2xl font-bold px-8 "
          onClick={goToMainPage}
        >
          처음으로 돌아가기
        </Button>
      </div>

      <div className="text-center mb-8">
        {data.knn_recommendations && data.knn_recommendations.length > 0 && (
          <Button
            disabled={true}
            className="disabled:text-gray-800 disabled:font-bold disabled:bg-white text-xl mt-10"
          >
            다른 헤어스타일로 미용 해 보실래요?
          </Button>
        )}
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        {data.knn_recommendations && data.knn_recommendations.map((rec, index) => renderImage(rec, index))}
      </div>
    </div>
  );
};

export default Final;
