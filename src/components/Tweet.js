import React from 'react'
import './tweet.css'
import { BiComment,BiHeart } from "react-icons/bi";
import { FiShare} from "react-icons/fi";
import { AiOutlineRetweet } from "react-icons/ai";
import Icon from "./Icon";

const Tweet = () => {
    return (
        <div className="tweetWrapper">
            <div className="profileIcon">
                <img src="images/dp.jpg" alt="" srcset=""/>
            </div>
            <div className="tweetbody">
                    <div className="info">
                        <div className="fullname"><h5>Abdallah Wario</h5></div>
                        <div className="username"><h5>@wario</h5></div>
                        <div className="time"><h5>. 3 min</h5></div>
                    </div>
                    <div className="content">
                        <div className="contentbody">
                            <p>
                                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi,
                                 obcaecati odit? Esse, dolores quia? Ea, nulla numquam
                                 optio explicabo eligendi earum necessitatibus unde inventore
                                 quidem sed atque non est ipsam?
                            </p>
                            <div className="contentmedia">
                                 <img src="images/dp.jpg" alt="" srcset=""/>
                              </div> 
                        </div>
                       
                        <div className="tweetfooter">
                                   <Icon className="footericon" Icon={BiComment} title="197"/>
                                   <Icon className="footericon"Icon={AiOutlineRetweet} title="20"/>
                                   <Icon className="footericon"Icon={BiHeart} title="5"/>
                                   <Icon className="footericon"Icon={FiShare} title=""/>
                         </div>
                    </div>

            </div>

            
            
        </div>
    )
}

export default Tweet
