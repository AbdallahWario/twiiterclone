import React from 'react'
import'./homeleft.css'
import { FaTwitter } from 'react-icons/fa';
import { BiHomeCircle,BiHash,BiEnvelope } from 'react-icons/bi';
import { GrNotification } from 'react-icons/gr';
import { BsBookmark } from 'react-icons/bs';
import {RiFileList2Line} from 'react-icons/ri';
import {CgMoreO,CgProfile} from 'react-icons/cg';
import Icon from './components/Icon';
import Button from './components/Button';




const Homeleft = () => {
    return (
     <div className="left" >
        <div className="icons">
            
             < Icon className="lefticon"  Icon={FaTwitter} />
             <Icon className="lefticon" Icon={BiHomeCircle} title="Home"/>
             <Icon className="lefticon" Icon={BiHash} title="Explore"/>
             <Icon className="lefticon" Icon={GrNotification} title="Notifications"/>
             <Icon className="lefticon" Icon={BiEnvelope} title="Message"/>
             <Icon className="lefticon" Icon={BsBookmark} title="Bookmark"/>
             <Icon className="lefticon" Icon={RiFileList2Line} title="Notes"/>
             <Icon className="lefticon" Icon={CgMoreO} title="More"/>
             <Icon className="lefticon" Icon={ CgProfile} title="Profile"/>
             
           
        </div>

        <div className="tweetBtn">
              <Button value="Tweet"/>
        </div>
     <div className="profile">
            
         </div>
           
            
            
        </div>
    )
}

export default Homeleft
