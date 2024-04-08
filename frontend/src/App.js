import React from 'react';
import Main from "./page/main";
import './input.css';
import {Route, Routes} from "react-router-dom";
import Start from "./component/start";
import GenderCheck from "./component/genderCheck";
import UpLoad from "./component/upLoad";
import Result from "./component/result";
const App = () => {
  return (
      <div className="bg-gray-900 text-amber-50">
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/start" element={<Start/>}/>
          <Route path="/genderCheck" element={<GenderCheck/>}/>
          <Route path="/upLoad" element={<UpLoad/>}/>
          <Route path="/result" element={<Result/>}/>
        </Routes>
      </div>
  );
}

export default App;
