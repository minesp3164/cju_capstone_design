import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  const [service, setService] = useState(false);
  const goToGenderPage = () => {
    navigate("/genderCheck");
  }
  const onClick = () =>{

  }
  return(
    <div className="">
      <div className="font-bold text-xl sm:text-2xl pb-10">
        이것은 여러분들께 어울리는 헤어스타일을 추천해드리는 딥러닝 프로그램입니다.
        <p/>
      </div>
      <div className="pb-10">
        <input className="accent-amber-300 form-checkbox h-8 w-8" type="checkbox" id="checkbox" onChange={() => setService(!service)}/>
        <label for="checkbox" className="text-4xl">다음 서비스를 이용하시겠습니까?</label><p/>
      </div>
      <div className="text-center ">
        <button disabled={!service} onClick={goToGenderPage} className="bg-gray-100 text-2xl hover:bg-gray-200 active:bg-gray-300 form-button  w-96 h-32">다음으로</button>
      </div>
    </div>
  )
}

export default Start;