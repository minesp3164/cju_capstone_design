import React from "react";
import {useNavigate} from "react-router-dom";
const Main = () =>{
  const navigate = useNavigate();
  const goToNextPage = () =>{
    navigate('/start');
  }
  return(
    <>
      <button onClick={goToNextPage}>시작하시려면 절 눌러주세요</button>
    </>
  )
};

export default Main;