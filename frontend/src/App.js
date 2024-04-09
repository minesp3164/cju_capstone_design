import React from 'react';
import Main from "./page/main";
import './input.css';
import {Route, Routes} from "react-router-dom";
import Start from "./page/start";
import GenderCheck from "./page/genderCheck";
import UpLoad from "./page/upLoad";
import Result from "./page/result";
import Header from "./component/header";
import Footer from "./component/footer";

const App = () => {
  return (
      <div className="bg-gray-900 text-amber-50">
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/start" element={<Start/>}/>
          <Route path="/genderCheck" element={<GenderCheck/>}/>
          <Route path="/upLoad" element={<UpLoad/>}/>
          <Route path="/result" element={<Result/>}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
