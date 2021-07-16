import React from 'react'
import './trends.css'
import { RiMoreLine } from 'react-icons/ri';
import Icon from './Icon'

const Trends = () => {
    return (
        <div className="trends">
           <div className="trendno">
               <p>No.1 Trending</p>
              <span><RiMoreLine/></span>  
           </div>
            <div className="trendtitle"> <h4>UDA WINS</h4></div>
            <div className="tweetcount"> <h6>13K</h6> </div>
        </div>
    )
}

export default Trends
