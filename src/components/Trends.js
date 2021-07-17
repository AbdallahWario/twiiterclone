import React from 'react'
import './trends.css'
import { RiMoreLine } from 'react-icons/ri';


const Trends = ({no,title,count}) => {
    return (
          <div className="trendwrapper">
                <div className="trends">
                 <span className="trendno"> 
                      <span className="no">{no}. Trending</span>
                      <RiMoreLine className="trendsmore"/>
                </span>  
               <div className="trendtitle"> <span>#{title}</span></div>
               
                <span className="tweetscount">{count} Tweets</span>
               
             </div>
          </div>
            
      
        
    )
}

export default Trends
