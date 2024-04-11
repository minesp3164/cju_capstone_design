import React from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const GenderCheck = () =>{
  const navigate = useNavigate();
  const [userGender, setUserGender] = React.useState();

  const onClick = (e) =>{
    console.log(e.target.id)
    setUserGender(e.target.id)
  }

  const ShowGender = () => {
    if (userGender === 'female'){
      return <div>당신의 성별은 여성입니다.</div>
    }
    else if(userGender ==='male'){
      return <div>당신의 성별은 남성입니다.</div>
    }
    else{
      return <div>성별을 선택해 주세요.</div>
    }
  }

  const goToUploadPage = () =>{
    navigate('/upLoad')
  }

  return(
    <div>
      성별 확인 페이지입니다.
      <h2> 당신의 성별을 알려주세요</h2>
      <button id="female" onClick={onClick}>여성</button>
      <button id="male" onClick={onClick}>남성</button>
      <ShowGender/>
      <button disabled={!userGender} onClick={genderCheck}>다음으로</button>
    </div>
  )
}

export default GenderCheck;