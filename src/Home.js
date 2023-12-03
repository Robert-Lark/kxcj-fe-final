import './Home.css';
import React from 'react';

import ListenNow from "./images/Planks/Listen_Now_Plank.png";
import GetInvolved from "./images/Planks/Get_Involved_Plank.png";
import Donate from "./images/Planks/Donate_Plank.png";
import logo from "./images/logo_white_2.png";

const HomePage = () => {

  const openNewWindow = () => {
    window.open(
      "http://216.115.15.236:8888/KXCJ",
      "_blank",
      "width=800,height=600"
    );
  };

  return (
    <div className='homePageContainer'>
      <div className='logoContainer'>
        <img src={logo} alt="Radio Station Logo" className="logo" />
      </div>
      <div className='linksContainer'>
        <a href="/listenNow">
        <img
              src={ListenNow}
              id="plank"
              alt="menu button"
              onClick={openNewWindow}
              className="linkImage"
            />
        </a>
        <a href="/donate">
          <img src={Donate} alt="Link 2" className="linkImage" id="plank" />
        </a>
        <a href="/getInvolved" id="getInvolved">
          <img src={GetInvolved} alt="Link 3" className="linkImage" id="plank" />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
