import React from "react";
import { Button } from "react-daisyui";
import { useParams } from "react-router-dom";
import axiosServer from "../component/Instance";

const Detail = () => {
    const params = useParams();    
    const productId = params.id;
    const name = "롱 보브"
    const description = '길이가 있는 보브 컷은 머리카락이 얼굴을 감싸면서 얼굴을 좀 더 슬림하게 보이게 해줍니다.'
    // const handleComposition = async() => {
    //     try{
    //         const formData = new FormData();
    //         formData.append("id", productId)
    //         const response = await axiosServer.post('/detail/{productId}', formData,{
    //             headers: {
    //                 "Content-Type": "multipart/form-data",
    //             },
    //         }
    //     ).then()
    //   }
    // }
    return (
        <div>
            <div>
                {name},{description}
            </div>
            <img className="" alt="사진" src="./center_part_perm.jpg" />
            <Button>
                합성하기
            </Button>
        </div>
    );
} 

export default Detail;