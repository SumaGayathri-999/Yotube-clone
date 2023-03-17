import React,{useState,useEffect} from 'react'
import './_header.scss';
import {FaBars} from 'react-icons/fa';
import {AiOutlineSearch} from 'react-icons/ai';
import { MdNotifications,MdApps } from 'react-icons/md';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Header({toggleSidebar}) {
   const [input,setInput] = useState("");
   const {user} = useSelector((state)=>{return state.auth});
   const navigate = useNavigate();
   const handleSubmit = (e)=>{
     e.preventDefault();
     navigate(`/search/${input}`)
  }

  return (
    <div className="border border-dark header py-4">
       <FaBars size= {22} className="header__menu" onClick={()=>{toggleSidebar()}} />
       <img className="header__logo" src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" onClick = {()=>{navigate("/home")}}/>
       <form onSubmit = {(e)=>handleSubmit(e)}>
        <input type="search" value ={input} onChange ={(e)=>{setInput(e.target.value)}}/>
        <button type="submit">
          <AiOutlineSearch size={24}/>
        </button>
       </form>
       <div className="header__icons">
          <MdNotifications size={24}/>
          <MdApps  size={24}/>
          <img src={user?.photourl} className ="profile" referrerPolicy="no-referrer" alt="avtar"/>
       </div>
    </div>
  )
}

export default Header