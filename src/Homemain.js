import React from "react";
import "./homemain.css";
import { WiStars } from "react-icons/wi";
import { GrGallery } from "react-icons/gr";
import { BiWorld } from "react-icons/bi";
import Icon from "./components/Icon";
import Tweet from "./components/Tweet";

const Homemain = () => {
  return (
    <div className="main">
         <div className="top">
         <div className="mainitems">
        <h2>Home</h2>
       <h2><WiStars className="stars" /></h2> 
       
      </div>
         </div>
     
     
      <div className="tweetinput">
          <div className="dpdiv">
          <img src="images/dp.jpg" alt="" srcset=""/>
          </div>
          <div className="inputsection">

              <input className="tweet" type="text" placeholder="What's  happening?" name="tweet" id=""/>
              <div className="inputlower">
                  < BiWorld/>   
                   <p>Everyone can reply</p> 
                </div>
            
          </div>
            
         {/* <Icon Icon={GrGallery} /> */}
      </div>
       <Tweet/>
       <Tweet/>
       <Tweet/>
       <Tweet/>

    </div>
  );
};

export default Homemain;
