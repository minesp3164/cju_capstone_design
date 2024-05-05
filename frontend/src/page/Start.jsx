import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { Button } from "react-daisyui";


const Start = () => {
  const navigate = useNavigate();
  const [service, setService] = useState(false);

  const goToGenderPage = () => {
    navigate("/upload");
    localStorage.setItem("start", "start");
  };

  return (
    <div className="">
      <div className="text-center font-bold lg:text-5xl sm:text-2xl pb-10 flex justify-center items-center gap-x-[15px]">

        <input className="accent-amber-300 form-checkbox lg:h-8 lg:w-8 sm:h-6 sm:w-6" type="checkbox" id="checkbox" onChange={() => setService(prev => !prev)}/>
        <label for="checkbox" className="lg:text-4xl sm:text-2xl text-white font-medium">서비스를 이용하시려면 눌러주세요</label><p/>
      </div>
      <div className="text-center ">
        <Button
          disabled={!service}
          onClick={goToGenderPage}
          className="w-[200px] h-[75px]"
          >
            다음으로
          </Button>
      </div>
    </div>
  );
};

export default Start;
