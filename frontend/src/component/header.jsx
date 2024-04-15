import React from "react";
import CustomDate from "./CustomDate";
import {useNavigate} from "react-router-dom";

const Header = () =>{
  const navigate = useNavigate();
  const toMainPage = () => {
    navigate('/')
  }
  return(
    <div className="py-20">
      <div className="text-center lg:text-8xl sm:text-6xl  pb-32 py-15">
        <button onClick={toMainPage} className="hover:text-gray-600 ">Hair Selector</button>
      </div>
      <div className="text-center text-black text-3xl font-bold w-full h-full py-10">
        <CustomDate />
      </div>
    </div>
  )
}
export default Header;
