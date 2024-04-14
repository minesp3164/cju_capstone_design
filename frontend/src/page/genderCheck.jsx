import React, {useEffect} from "react";
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
      return <div className="flex text-lg ">성별을 선택해 주세요.</div>
    }
  }

  const goToUploadPage = async() =>{
    axios.post('/genderCheck',
      "user"
    ).then(res => {
      console.log(res.data)
    })
    navigate('/upLoad')
  }

  return(
    <div className="py-6 px-10">
      <div className="text-lg text-gray-800"> 당신의 성별을 알려주세요</div>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex ">
        <li className= "w-full border-b border-gray-200 sm:border-b-0 sm:border-r  hover:bg-gray-100 active:bg-gray-200">
          <div>
            <button id="female" onClick={onClick} className="w-full ms-2 text-sm font-medium text-gray-900 hover:text-gray-800">여성</button>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r hover:bg-gray-100 active:bg-gray-200">
          <div>
            <button id="male" onClick={onClick} className="w-full ms-2 text-sm font-medium text-gray-900 ">남성</button>
          </div>
        </li>
      </ul>
      <ShowGender/>
      <button disabled={!userGender} onClick={goToUploadPage}>다음으로</button>
    </div>
  )
}

export default GenderCheck;