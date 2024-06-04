import React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "../page/Main";
import UpLoad from "../page/UpLoad";
import Result from "../page/Result";
import HowToUse from "../page/HowToUse";
import Detail from "../page/Detail"

const Body = () =>{

  return (
    <div>
      <div className="pb-72">
        <Routes>
          <Route path="/howToUse" element={<HowToUse/>} />
          <Route path="/" element={<Main/>}/>
          <Route path="/upLoad" element={<UpLoad/>}/>
          <Route path="/result" element={<Result/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Body;
