import React from "react";
import {useNavigate} from "react-router-dom";

const GenderCheck = () =>{
  const navigate = useNavigate();
  const [gender, setGender] = React.useState();
  const onClick = (e) =>{
    console.log(e.target.id)
    setGender(e.target.id)
  }
  const goToUploadPage = () =>{
    navigate('/upLoad')
  }
  return(
    <div>
      성별 확인 페이지입니다.
      <h2> 당신의 성별을 알려주세요</h2>
      <button id="여성" onClick={onClick}>여성</button>
      <button id="남성" onClick={onClick}>남성</button>
      <h2>당신의 성별은{gender}입니다</h2>
      <button disabled={!gender} onClick={goToUploadPage}>다음으로</button>
    </div>
  )
}

export default GenderCheck;