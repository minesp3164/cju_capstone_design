import React from "react";
import CustomDate from "./CustomDate";
import {useNavigate} from "react-router-dom";

const Header = () =>{
  const navigate = useNavigate();
  const toMainPage = () => {
    navigate('/')
  }
  return(
    <div className="py-12 flex justify-center w-full ">
      <div className="text-center lg:text-8xl sm:text-6xl  pb-32 py-5">

        <button onClick={toMainPage} className="hover:text-gray-600 font-poet">StarTip</button>
      </div>
      <div className="text-center text-black text-xl font-bold py-4">
        <CustomDate />
      </div>
    </div>
  )
}
export default Header;
