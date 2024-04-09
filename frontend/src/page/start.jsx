import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  const [service, setService] = useState(false);
  const goToGenderPage = () => {
    navigate("/genderCheck");
  }

  return(
    <div>
      시작 페이지 입니다
      이것은 여러분들께 어울리는 헤어스타일을 추천해드리는 딥러닝 프로그램입니다.<p/>
      <input type="checkbox" id="checkbox" onChange={() => setService(!service)}/>다음 서비스를 이용하시겠습니까?<p/>
      <button disabled={!service} onClick={goToGenderPage} className="bg-blue-400 hover:bg-blue-600">다음으로</button>
    </div>
  )
}

export default Start;