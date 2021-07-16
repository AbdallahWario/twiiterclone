import React from "react";
import "./homeright.css";
import { BiSearch } from 'react-icons/bi';
import Trends from "./components/Trends";

const Homeright = () => {
  return <div className="right">
    <div className="topsearch">
      <div className="topsearchicon">
       <BiSearch />
      </div>
      <input type="text" name="" placeholder="Search Twitter" id=""/>
      
    </div>
    <div className="trendswrapper">
          <Trends />
    </div>
    
    </div>;
};

export default Homeright;
