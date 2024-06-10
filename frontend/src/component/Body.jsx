import React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "../page/Main";
import UpLoad from "../page/UpLoad";
import Result from "../page/Result";
import HowToUse from "../page/HowToUse";
import Process_Image from "../page/Process_Image";
import Final from "../page/Final";

const Body = () =>{

  return (
    <div>
      <div className="pb-96">
        <Routes>
          <Route path="/howToUse" element={<HowToUse/>} />
          <Route path="/" element={<Main/>}/>
          <Route path="/upLoad" element={<UpLoad/>}/>
          <Route path="/result" element={<Result/>}/>
          <Route path="/process_image" element={<Process_Image/>}/>
          <Route path="/final" element={<Final/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Body;
