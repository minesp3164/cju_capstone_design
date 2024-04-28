import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
const Start = () => {
  const navigate = useNavigate();
  const [service, setService] = useState(false);
  const goToGenderPage = () => {
    navigate("/upload");
    localStorage.setItem("start","start")
  }

  return(
    <div className="">
      <div className="text-center font-bold lg:text-5xl sm:text-2xl pb-10 ">
        <input className="accent-amber-300 form-checkbox lg:h-8 lg:w-8 sm:h-6 sm:w-6" type="checkbox" id="checkbox" onChange={() => setService(!service)}/>
        <label for="checkbox" className="lg:text-4xl sm:text-2xl ">서비스를 이용하시려면 눌러주세요</label><p/>
      </div>
      <div className="text-center ">
        <button disabled={!service} onClick={goToGenderPage} className="bg-gray-100 text-2xl hover:bg-gray-200 active:bg-gray-300 form-button  lg:w-72 lg:h-24 sm:w-64 sm:h-24 sm: disabled:bg-gray-100 ">다음으로</button>
      </div>
    </div>
  )
}

export default Start;
