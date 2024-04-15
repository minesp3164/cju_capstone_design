import React from "react";
import {useNavigate} from "react-router-dom";
const Main = () =>{
  const navigate = useNavigate();
  const goTOStartPage = () =>{
    navigate('/start');
  }
  const goToHowToUsePage= () =>{
    navigate('/howToUse')
  }
  return(
    <div className="text-center">
      <div>
        <button className="text-black font-medium lg:text-5xl sm:text-2xl bg-gray-50 hover:text-gray-600 active:text-gray-400" onClick={goToHowToUsePage}>사용방법</button>
      </div>
      <div className="pt-20">
        <button className="text-black font-bold lg:text-6xl sm:text-3xl bg-gray-100 hover:text-gray-600 active:text-gray-400" onClick={goTOStartPage}>시작하시려면 눌러주세요</button>
      </div>
    </div>
  )
};

export default Main;