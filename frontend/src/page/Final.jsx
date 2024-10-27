import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dataJson from '../assets/data/finaldata.json';
import {Button} from "react-daisyui";
import axiosServer from "../component/Instance";

const Final = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const goToMainPage = () => navigate("/");

  const fetchData = async () => {
    try {
        const response = await axiosServer.get('/get_processed_image_result')
      console.log(response.data);
      if (response.data) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    setData(dataJson);
    fetchData()
    const kakaoKey = process.env.REACT_APP_KAKAO_API_KEY;
    if (kakaoKey) {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(kakaoKey);
      } else {
      }
    } else {
    }
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }


  const shareToKakao = () => {
    if (!window.Kakao) {
      console.error("Kakao SDK not loaded");
      return;
    }
    console.log(window.Kakao)
    window.Kakao.Share.createDefaultButton({
      container: '#kakaotalk-sharing-btn',
      objectType: 'feed',
      content: {
        title: data.recommendation.name,
        description: data.recommendation.description,
        imageUrl: null  ,
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      itemContent: {
        profileText: 'Kakao',
        profileImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        titleImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        titleImageText: 'Cheese cake',
        titleImageCategory: 'Cake',
        items: [
          {item: 'Cake1', itemOp: '1000원'},
          {item: 'Cake2', itemOp: '2000원'},
          {item: 'Cake3', itemOp: '3000원'},
          {item: 'Cake4', itemOp: '4000원'},
          {item: 'Cake5', itemOp: '5000원'},
        ],
        sum: 'Total',
        sumOp: '15000원',
      },
      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        {
          title: '앱으로 이동',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
      ],
    });
  };

  const goToProcessImage = (id) => {
    navigate("/process_Image", {state: {from: '/final', id: id+1}})
  }

  const renderImage = (imageData, index) => {
    return imageData ? (
      <img
        key={index}
        className="w-[384px] h-[384px] border-2 mr-2 border-black rounded-lg"
        src={`data:image/jpeg;base64,${imageData}`}
        alt={`image-${index + 1}`}
        onClick={() => goToProcessImage(index)}
      />
    ) : null;
  };


  return (
    <div
      className="bg-white pb-4 bg-opacity-90  rounded-lg shadow-lg max-w-screen-xl max-h-screen-lg  w-full text-gray-100">
      <div className="text-center text-2xl">
        합성된 이미지
      </div>
      <div className="flex justify-center pt-10">
        {data.recommendations && (
          <img
            className="w-[384px] h-[384px] border-2 border-black rounded-lg"
            src={`data:image/jpeg;base64,${data.recommendations.image_syn}`}
            alt="합성된 이미지"
          />
        )}
        <button id="kakaotalk-sharing-btn" onClick={shareToKakao}>
          <img
            src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
            alt="카카오톡 공유 보내기 버튼"
          />
        </button>
      </div>
      <div className="flex justify-center pt-5 text-black font-bold text-2xl">
        {data.knn_recommendations && data.knn_recommendations.length > 0 ? (
          <p>다른 헤어스타일로 미용 해보기</p>
        ) : null}
      </div>
      <div className="flex justify-center pt-10 pb-2 ">
        {data.knn_recommendations.map((rec, index) => renderImage(rec.image, index))}
      </div>
      <div className="flex justify-center">
        <Button className="bg-gray-800 hover:bg-gray-900 text-white text-2xl font-bold" onClick={goToMainPage}>
          처음으로 돌아가기
        </Button>
      </div>
    </div>
  );
};

export default Final;