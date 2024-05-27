import React from "react";
import {useNavigate} from "react-router-dom";
import { Button } from "react-daisyui";

const Main = () =>{
  const navigate = useNavigate();
  const goTOStartPage = () =>{
    navigate('/start');
  }

  const goToHowToUsePage = () => {
    navigate('/howToUse')
  }

  const HandleHowToUse = () =>{
    console.log(localStorage.getItem('HowToUse'))
    if(localStorage.getItem('HowToUse')){
      return null
    }
    else {
      return <button
        className="text-black font-medium lg:text-5xl sm:text-2xl bg-gray-50 hover:text-gray-600 active:text-gray-400"
        onClick={goToHowToUsePage}>사용방법</button>
    }
  }

  return (
    <div className="text-center">
      <div>
        <HandleHowToUse/>
      </div>
      <div className="pt-20">
        <Button
          onClick={goTOStartPage}
          className="text-2xl text-slate-700"
        >
            시작하시려면 눌러주세요
          </Button>
      </div>
    </div>
  )
};

export default Main;
