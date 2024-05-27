import React from "react";
import {useNavigate} from "react-router-dom";

const Header = () =>{
  const navigate = useNavigate();
  const toMainPage = () => {
    navigate('/')
  }
  return(
    <div className="py-12 flex justify-center w-full">
      <div className="text-center lg:text-8xl sm:text-6xl pb-32 py-5 flex flex-col gap-y-[20px]">
        <button 
          onClick={toMainPage}
          className="text-white font-poet transition duration-150 hover:text-violet-200"
        >
          StarTip
        </button>
        <span className="font-poet text-[18px] text-violet-200">
          Get hairstyle Recommendations that work for you
        </span>
      </div>
    </div>
  )
}
export default Header;
