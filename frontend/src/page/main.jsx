import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import {useNavigate} from "react-router-dom";
const Main = () =>{
  const navigate = useNavigate();
  const goToNextPage = () =>{
    navigate('/start');
  }
  return(
    <>
      <Header/>
      <button onClick={goToNextPage}>시작하시려면 절 눌러주세요</button>
      <Footer/>
    </>
  )
};

export default Main;