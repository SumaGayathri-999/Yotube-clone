import React from 'react'
import './_sidebar.scss';
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/actions/auth_action';
import {MdHome,MdSubscriptions,MdLibraryBooks,MdThumbUp,MdHistory,MdExitToApp} from 'react-icons/md';
import {useLocation,useNavigate} from 'react-router-dom';

function SideBar({isSidebar,toggleSidebar}) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const path = location.pathname.split("/")[1];
  const watch_menu = path === "watch" ? "d-none" : ""

  const handleLogout = ()=>{
    dispatch(logout());
  }
  return (
    <nav className={isSidebar ? "sidebar open" : "sidebar"}  style = {path === "watch" ? {width:"80px"}:{}} onClick={toggleSidebar}>
          <li onClick = {()=>{navigate("/home")}}>
            <MdHome size={23} /><span className ={watch_menu}>Home</span>
          </li>
          <li>
            <MdSubscriptions size={23} /><span className ={watch_menu}>Subscriptions</span>
          </li>
          <li>
            <MdThumbUp size={23} /><span className ={watch_menu}>Liked Videos</span>
          </li>
          <li>
            <MdHistory size={23} /><span className ={watch_menu}>History</span>
          </li>
          <li>
            <MdLibraryBooks size={23} /><span className ={watch_menu}>Library</span>
          </li>
          <li className="border border-secondary" onClick = {handleLogout}>
            <MdExitToApp size={23} /><span className ={watch_menu}>LogOut</span>
          </li>

    </nav>
  )
}

export default SideBar; 
