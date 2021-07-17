import React from "react";
import "./homeright.css";
import { BiSearch } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
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
      <div className="locationwrapper">
      <div className="trendnav">
           <span className="location">Nairobi Trends</span>
            <span className="settings"><FiSettings/></span>
      </div>
      </div>
      
          <Trends /> 
          <Trends /> 
          <Trends /> 
          <Trends />
           <Trends />
            <Trends />
             <Trends />
              <Trends /> 
             <Trends />
    </div>
    
    </div>;
};

export default Homeright;
