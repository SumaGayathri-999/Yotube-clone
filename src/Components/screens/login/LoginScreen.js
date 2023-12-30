import React from 'react'
import './_login.scss';
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {login} from '../../../Redux/actions/auth_action'
import {useNavigate} from 'react-router-dom';
function LoginScreen() {
  const {accesstoken,loading} = useSelector((state)=>state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    if(accesstoken){
      navigate("/home");
    }
  },[accesstoken])
  const handleLogin = ()=>{
    dispatch(login());
  }
  return (
    <div className="login">
        <div className="login__container">
            <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
            <div className="gradient">
               <button onClick = {handleLogin}><p className="gradient-text">Login with Google</p></button>
            </div>
        </div>
    </div>
  )
}

export default LoginScreen
