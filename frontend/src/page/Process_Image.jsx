import React, {useState} from "react";
import { Loading } from 'react-daisyui';
import axiosServer from "../component/Instance";


const Process_Image = () => {
  const [getImage, setGetImage] = useState(null);
  const processImages = () => {
    axiosServer.get('/get_processed_image')
      .then(response => {
        setGetImage(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data.error);
      })
  }
  return (
    <div>
      <div className="flex justify-center">
        <Loading className="w-[500px] h-[1000px] loading-spinner "></Loading>
      </div>
      <div className="flex justify-center">
        <p className="font-bold text-5xl">3~5 분정도 소요됩니다.</p>
      </div>
    </div>
  )
};


export default Process_Image;
