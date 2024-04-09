import React from "react";
import Webcam from "react-webcam";
import {useNavigate} from "react-router-dom";

const Item = (props) => {
  if(props.checked === "사진"){
    return <input type="file" id="image" accept="image/*" onChange={props.onChange}/>
  }else if(props.checked==="캠"){
      return <Webcam/>
    }
  else{
    return "위 중 하나 선택해주세요"
  }
}

const UpLoad = () => {
  const [canNext, setCanNext] = React.useState(false);
  const [checked, setChecked] = React.useState("")
  const [uploadImgUrl, setUploadImgUrl] = React.useState("");
  const onClick = (e) => {
    if (e.target.id === "사진") {
      setChecked("사진")
    } else {
      setChecked("캠")
    }
  }

  const navigate = useNavigate();
  const goToNextPage = () =>{
    navigate('/result')
  }

  const onChangeImageUpload = (e) =>{
    const {files} = e.target
    const upload = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(upload);
    reader.onloadend = () => {
      setUploadImgUrl(reader.result)
      setCanNext(true)
      console.log(reader.result)
    }
  }
  return (
    <div>
      <h2> 어떤 유형의 파일을 보내시나요</h2>
      <button id="사진" onClick={onClick}>사진</button>
      <p/>
      <button id="캠" onClick={onClick}>캠</button>
      <p/>
      <Item
        checked={checked}
        onChange={onChangeImageUpload}
      />
      <p/>
      <button onClick={goToNextPage} disabled={!canNext}>다음으로</button>
    </div>
  )
}

export default UpLoad;