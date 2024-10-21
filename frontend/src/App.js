import React from 'react';
import './input.css';
  import Body from "./component/Body";
  import Header from "./component/Header";
  import Footer from "./component/Footer";

const App = () => {
  return (
      <div className="rootDiv bg-background-image bg-cover bg-center">
        <Header/>
        <Body/>
      </div>
  );
}

export default App;