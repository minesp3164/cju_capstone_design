import React, {useEffect, useState} from "react";
import axiosServer from "../component/Instance";
import {Button} from "react-daisyui";
import {useNavigate} from "react-router-dom";

const Final =() => {
  const [image,setImage] = useState(null);
  const navigate = useNavigate();
  const goToMainPage = () => navigate("/");
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axiosServer.get('/get_processed_image_result')
        console.log(response.data);
        if(response.data.image){
          setImage(response.data.image);
        }
      }catch(error){
        console.log(error)
      }
    }
    fetchData();
  }, []);

  return (
    <div className="h-full w-full text-gray-100">
      <div className="text-center text-2xl">
        합성된 이미지
      </div>
      <div className="flex justify-center pt-10">
        <img
          src={`data:image/jpeg;base64,${image}`}
          alt="Processed Image"
          className="w-96 h-96"
        />
      </div>
      <div className="flex justify-center pt-10">
        <Button className="text-2xl w-72 h-[76px]" onClick={goToMainPage}>
          처음으로 돌아가기
        </Button>
      </div>
    </div>
  )
}

export default Final;