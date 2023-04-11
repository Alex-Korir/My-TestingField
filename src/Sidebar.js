import React from 'react'
//import "./sidebar.css"
import {NavLink} from "react-router-dom"

import { FaHome, FaRegKissBeam, FaUserFriends, FaRegHandRock, FaRegHandPeace, FaChild, FaRegCalendarAlt, FaTools ,FaTh} from 'react-icons/fa';



function Sidebar() {
  // if(!data){
  //   return null
  // }

  
  return (
    <div className='sidebar-container'>
      <ul>
        <NavLink to='home'><li><span><FaHome /></span>Home</li></NavLink>
        <NavLink to='profile'><li><span><FaRegKissBeam/></span>Profile</li></NavLink>
        <NavLink to='friends'><li><span><FaUserFriends/></span>Friends</li></NavLink>
        <NavLink to='what-we-do'><li><span><FaRegHandRock/></span>What we do</li></NavLink>
        <NavLink to='who-we-are'><li><span><FaRegHandPeace/></span>Who we are</li></NavLink>
        <NavLink to='community'><li><span><FaChild/></span>Community</li></NavLink>
        <NavLink to='contact-us'><li><span><FaRegCalendarAlt /></span>Contact Us</li></NavLink>
        <NavLink to='apps'><li><span><FaTh/></span>Apps</li></NavLink>
        <NavLink to='settings'><li><span><FaTools/></span>Settings</li></NavLink>
      </ul>
    </div>
  )
  
}

export default Sidebar