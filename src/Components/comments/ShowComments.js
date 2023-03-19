import React,{useState,useRef} from 'react'
import Comment from './Comment';
import './_comments.scss';

function ShowComments({allComments}) {
    const [isComments,setisComments] = useState(false);
    const commentRef = useRef(null);

    const toggleComments = ()=>{
      console.log("cllicked");
      commentRef.current.classList.toggle("hide");
      setisComments(!isComments);
    }
  return (
    <>
    <div className ="show_comments p-2 m-2 text-center" onClick = {toggleComments}>{isComments  ? "Close Comments" : "Show Comments"}</div>
    <div className= "comments_list" ref= {commentRef}>
           {allComments?.map((comment,index)=>{
            return <Comment key = {index} comment={comment}/>
           })}
       </div>
     </>
    )
}

export default ShowComments;