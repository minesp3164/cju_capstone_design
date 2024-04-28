import React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "../page/Main";
import Start from "../page/Start";
import UpLoad from "../page/UpLoad";
import Result from "../page/Result";
import HowToUse from "../page/HowToUse";

const Body = () =>{

  return (
    <div>
      <div className="pb-72">
        <Routes>
          <Route path="/howToUse" element={<HowToUse/>} />
          <Route path="/" element={<Main/>}/>
          <Route path="/start" element={<Start/>}/>
          <Route path="/upLoad" element={<UpLoad/>}/>
          <Route path="/result" element={<Result/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Body;