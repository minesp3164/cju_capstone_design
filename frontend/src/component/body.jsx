import React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "../page/Main";
import Start from "../page/Start";
import GenderCheck from "../page/GenderCheck";
import UpLoad from "../page/UpLoad";
import Result from "../page/Result";
import User from "../page/newroute";
import HowToUse from "../page/HowToUse";
const Body = () =>{

  return (
    <div>
      <div className="px-32">
        <Routes>
          <Route path="/howToUse" element={<HowToUse/>} />
          <Route path="/" element={<Main/>}/>
          <Route path="/start" element={<Start/>}/>
          <Route path="/genderCheck" element={<GenderCheck/>}/>
          <Route path="/upLoad" element={<UpLoad/>}/>
          <Route path="/result" element={<Result/>}/>
          <Route path="/users" element={<User/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Body;