import React from "react";
import {useNavigate} from "react-router-dom";

const HowToUse = () => {
  const navigate = useNavigate();
  const returnToMain = () => {
    localStorage.setItem('HowToUse', JSON.stringify(returnToMain))
    navigate('/')
  }
  return(
    <div>
      <div className="text-center text-2xl font-bold">
        이 사이트는 사진을 통한 사람의 얼굴형 분석과 그에 맞는 헤어타일을 추천해드립니다.
      </div>
      <div className="flex items-center justify-center font-bold w-full pb-10 pt-20">
        <div className=" text-center  text-xl border-4 border-gray-300">
          이용방법
        </div>
      </div>
      <ul className="text-xl font-bold text-center pb-32">
        <li className="pb-10">사이트에 접속후 이용약관에 확인을 누르신후 다음으로 가시면 됩니다.</li>
        <li className="pb-10">다음 사이트에선 이미지나 캠을 이용하여 사진을 보내거나 즉석해서 사진을 찍을 수 있습니다.</li>
        <li>다음 사이트에선 이미지를 이용해 어울리는 헤어스타일을 찾으실 수 있습니다.</li>
      </ul>
      <div className="flex items-center justify-center font-bold w-full">
        <button className="font-bold border-2 border-gray-300 p-2 bg-gray-300 hover:bg-gray-200 hover:border-gray-200" onClick={returnToMain}>
          시작하기
        </button>
      </div>
    </div>
  );
}

export default HowToUse;