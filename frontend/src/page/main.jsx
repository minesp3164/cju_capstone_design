import React from "react";
import {useNavigate} from "react-router-dom";
const Main = () =>{
  const navigate = useNavigate();
  const goToNextPage = () =>{
    navigate('/start');
  }
  return(
    <div className="text-center pt-20">
      <button className="text-black font-bold lg:text-6xl sm:text-3xl bg-gray-100 hover:text-gray-600 active:text-gray-400" onClick={goToNextPage}>시작하시려면 눌러주세요</button>
    </div>
  )
};

export default Main;