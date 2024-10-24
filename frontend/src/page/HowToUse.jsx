import React from "react";
import {useNavigate} from "react-router-dom";
import { Button } from "react-daisyui";


const HowToUse = () => {
  const navigate = useNavigate();
  const returnToMain = () => {
    navigate('/upload')
  }
  return(
    <div className="w-full p-10 bg-white bg-opacity-90  rounded-lg shadow-lg max-w-screen-xl max-h-screen-lg">
      <div className="text-center text-2xl font-bold">
        이 사이트는 사진을 통한 여러분의 얼굴형 분석과 그에 맞는 헤어타일을 추천해드립니다.
      </div>
      <div className="flex items-center justify-center font-bold w-full pb-10 pt-10">
        <Button
          disabled="disabled"
          className="text-black font-bold text-2xl  bg-gray-50 disabled:bg-gray-50 disabled:text-black">
          이용방법
        </Button>
      </div>
      <ul className="text-xl font-bold text-center pb-16">
        <li className="pb-10">본인의 사진이나 캠을 이용하여 사진을 보내거나 즉석해서 사진을 찍을 수 있습니다.</li>
        <li className="pb-10">캠을 이용하여 하실때에는 본인의 얼굴이 정중앙에 와주셔야하고 정면을 바라보아 주셔야 합성이 잘 될 수있습니다</li>
        <li>다음 사이트에선 이미지를 이용해 어울리는 헤어스타일을 찾으실 수 있습니다.</li>
      </ul>
      <div className="flex items-center justify-center font-bold w-full">
        <Button className="text-black font-bold text-2xl  bg-gray-50 hover:text-gray-600 active:text-gray-400" onClick={returnToMain}>
          시작하기
        </Button>
      </div>
    </div>
  );
}

export default HowToUse;