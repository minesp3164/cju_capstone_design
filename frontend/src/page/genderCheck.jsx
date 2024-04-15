import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const GenderCheck = () =>{
  const navigate = useNavigate();
  const [userGender, setUserGender] = React.useState();
  const [response, setResponse] = React.useState('');

  const onClick = (e) =>{
    console.log(e.target.id)
    setUserGender(e.target.id)
  }

  const ShowGender = () => {
    if (userGender === 'female'){
      return <div className="text-2xl pb-20">당신의 성별은 여성입니다.</div>
    }
    else if(userGender ==='male'){
      return <div className="text-2xl pb-20">당신의 성별은 남성입니다.</div>
    }
    else{
      return <div className="text-2xl pb-20">성별을 선택해 주세요.</div>
    }
  }

  const goToUploadPage = async() =>{
    try {
      const response = await axios.post('/genderCheck', {
        gender:userGender, // 보낼 데이터
      });
      setResponse(response.data);
      console.log(response.data)// 받은 응답 처리
    } catch (error) {
      console.error('Error sending data to Flask:', error);
    }
    navigate('../upLoad')
  }

  return(
    <div className="py-6 px-10 text-center">
      <div className="text-4xl font-bold  text-center text-gray-800 pb-32"> 확인하실 성별을 선택해 주세요</div>
      <ul className="pb-20 h-full w-full text-2xl font-medium text-gray-900 bg-white rounded-lg sm:flex ">
        <li className= "w-full py-10 bg-pink-200  hover:bg-pink-100 active:bg-gray-50" onClick={onClick} id="female">
          <div>
            <button
              onClick={onClick}
              id="female"
              className="w-full h-full font-bold text-gray-900 hover:text-gray-800">
                여성<i id="female"  onClick={onClick} className="fa-solid fa-person-dress text-3xl text-pink-500"/>
            </button>
          </div>
        </li>
        <li id="male"  onClick={onClick} className="w-full  border-b py-10 bg-sky-200 border-gray-200 border-2  hover:bg-sky-100 active:bg-gray-50">
          <div>
            <button
              id="male"
              onClick={onClick}
                    className="w-full h-full font-bold text-gray-900 ">
              남성 <i id="male" onClick={onClick} className="fa-solid fa-person text-blue-300 text-3xl"/>
            </button>
          </div>
        </li>
      </ul>
      <ShowGender/>
      <button disabled={!userGender} onClick={goToUploadPage} className="w-96 h-32 text-2xl font-bold bg-blue-300 hover:bg-blue-200 active:bg-blue-50 disabled:bg-blue-300">다음으로</button>
    </div>
  )
}

export default GenderCheck;