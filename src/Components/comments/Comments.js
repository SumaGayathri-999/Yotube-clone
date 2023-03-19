import React from 'react';
import {useState,useEffect,useRef} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import './_comments.scss';
import Comment from './Comment';
import numeral from 'numeral';
import {getComments,addComments} from '../../Redux/actions/comment_action';
import ShowComments from './ShowComments';

function Comments({commentCount,videoId}) {
  const [text,setText]=useState("");
  const dispatch = useDispatch();
  const comments = useSelector((state)=>{return state.video_comments.comments});
  const {user} = useSelector((state)=>{return state.auth})


  useEffect(()=>{
    dispatch(getComments(videoId));
  },[videoId,dispatch])
  const allComments = comments?.map((item)=>{
    return item.snippet.topLevelComment.snippet;
  });
  const handleSubmit = (event) => {
      event.preventDefault();
      setText("");
      dispatch(addComments(videoId,text));
  }


  return (
    <>
       <p  style = {{fontWeight:"600",marginTop:"0.8rem"}}>{numeral(commentCount).format("0.a")} comments</p>
       <div className ="comments__form d-flex w-100">
           <img className="accountImage" src={user?.photourl} alt="" />
           <form onSubmit ={(e)=>{handleSubmit(e)}} className ="d-flex flex-grow-1 ml-2" style ={{marginLeft:"1rem"}}>
              <input type = "text"  value ={text} onChange = {(e)=>{setText(e.target.value)}} className =" flex-grow-1 text-light" placeholder ="Comment here"></input>
              <button className ="rounded">Comment</button>
           </form>
       </div>
       <ShowComments allComments = {allComments}/>       
    </>
  )
}

export default Comments