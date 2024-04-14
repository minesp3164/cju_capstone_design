import React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "../page/main";
import Start from "../page/start";
import GenderCheck from "../page/genderCheck";
import UpLoad from "../page/upLoad";
import Result from "../page/result";
import User from "../page/newroute";
const Body = () =>{

  return (
    <div className="px-32">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/start" element={<Start/>}/>
        <Route path="/genderCheck" element={<GenderCheck/>}/>
        <Route path="/upLoad" element={<UpLoad/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/users" element={<User/>}/>
      </Routes>
    </div>
  )
}

export default Body;