import React from "react";
import {useNavigate} from "react-router-dom";

const Header = () =>{
  const navigate = useNavigate();
  const toMainPage = () => {
    navigate('/')
  }
  return(
    <div className="pt-5 flex justify-center w-full">
      <div className="text-center text-9xl pb-16 py-5 flex flex-col gap-y-[20px]">
        <button 
          onClick={toMainPage}
          className="text-violet-300 font-poet transition duration-150 hover:text-violet-200"
        >
          StarTip
        </button>
        <span className="font-poet text-[24px] text-violet-200">
          Get hairstyle Recommendations that work for you
        </span>
      </div>
    </div>
  )
}
export default Header;
