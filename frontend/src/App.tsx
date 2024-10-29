// @ts-ignore
import React from 'react';
import {useLocation} from 'react-router-dom';
import Body from "./component/Body";
import Header from "./component/Header";

const BackgroundWrapper: React.FC<any> = ({ setBackgroundClass }) => {
  const location = useLocation();

  let backgroundClass = 'bg-default';


  if (location.pathname === '/') {
    backgroundClass = 'bg-background-main-image';
  } else {
    backgroundClass = 'bg-background-default-image';
  }

  setBackgroundClass(backgroundClass);

  return null;
};


const App = () => {
  const [backgroundClass, setBackgroundClass] = React.useState('bg-default');
  const location = useLocation();
  const ShowHeader = () =>{
    if (location.pathname === '/') {
      return null;
    } else {
      return <Header/>;
    }

  }
  return (
    <div className={`rootDiv ${backgroundClass} bg-cover`}>
      <ShowHeader/>
      <BackgroundWrapper setBackgroundClass={setBackgroundClass} />
      <Body />
    </div>
  );
}

export default App;