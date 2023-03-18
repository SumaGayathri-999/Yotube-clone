import React, {useState, useEffect } from 'react'
import { Col,Row } from 'react-bootstrap';
import {MdThumbUp,MdThumbDown} from 'react-icons/md'
import {FaShare,FaDownload} from 'react-icons/fa'
import { HiOutlineSave} from 'react-icons/hi';
import {AiFillEye } from 'react-icons/ai';
import "./_watchScreen.scss"
import Comments from '../../comments/Comments';
import VideoWatch from '../../videoWatch/VideoWatch';
import ShowMore from './ShowMore';
import {useParams,useLocation} from 'react-router-dom';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Subscribe from './Subscribe'
import request from '../../../api';
import { baseParams } from '../../../api';
import HelmetCustom from '../../HelmetCustom';


function Watchscreen() {
   const {id} = useParams();
   const location = useLocation();
   const [loading,setLoading] = useState(true);
   const [relatedvid,setRelatedvid] = useState(null);
   const {videoInfo,channelInfo} = location.state;

   const {snippet:{description,title},statistics:{commentCount,likeCount}} = videoInfo[0]
   const {id:channelId,snippet:{title:channelTitle,thumbnails:channelIcon},statistics:{subscriberCount}} = channelInfo[0];
 
    useEffect(()=>{
      (async ()=>{
        const {data} = await request('/search',{
          params:{
            ...baseParams,
            part:"snippet",
            relatedToVideoId:id,
            maxResults: 15,
            type:'video',
          }
        });
        setRelatedvid(data.items);
        setLoading(false);
      })();
        
    },[id])
  return (
    <>
    <Row className ="watchscreen force_left mt-3" style = {{padding:"0px"}} >
        <HelmetCustom title ={title} description = {description}/>
        <Col lg={8}>
         <div className="iframe_container" style = {{backgroundColor:"grey"}}>
         <iframe title = "video" src={`http://www.youtube.com/embed/${id}?autoplay=1`} type="video/youtube" width="100%" height="100%" frameBorder="0" allowFullScreen allow="autoplay"></iframe>
         </div>
        <div className ="video_title my-3 text-light" >
         {title}
        </div>
        <div className ="d-flex justify-content-between channel align-items-center">
            <div className ="d-flex align-items-center">
            <LazyLoadImage  className = "channel__image" src={channelIcon.default.url} alt=""   loading = "lazy" style ={{backgroundColor:"grey"}}></LazyLoadImage >
               <div style = {{marginLeft:"0.35rem"}}>
                   <h6 style ={{marginBottom:"0px"}}>{channelTitle}</h6>
                   <span >subscribes {numeral(subscriberCount).format("0.a")}</span>
               </div>
            </div>
            <div>
              <Subscribe channelId ={channelId}/>
            </div>
        </div>
        <ShowMore className ="description" description = {description} />
        <div className ="stats d-flex justify-content-between flex-wrap"  >
          <span className = "stats__likes mt-2">
            <MdThumbUp className="likes"  color="black"></MdThumbUp><span className = "text-dark" style = {{borderRight:"1px solid grey"}}>{numeral(likeCount).format("0.a")}</span>
            <MdThumbDown className="dislikes" color="black"></MdThumbDown>
          </span>
          <span className = "stats__share mt-2 rounded">
             <FaShare  color = "black"></FaShare>
          </span>
          <span className = "stats__save mt-2">
             <HiOutlineSave  color = "black"></HiOutlineSave>
          </span>
          <span className = "stats__download mt-2">
             <FaDownload  color = "black"></FaDownload>
          </span>
          <span className = "stats__views mt-2 rounded text-dark">
            <AiFillEye  color = "black"/> {numeral(likeCount).format("0.a")} Views
            </span>
        </div>
        <Comments commentCount = {commentCount} videoId = {id}/>
        </Col>
  
        <Col lg={4}>
        {relatedvid?.map((video)=><VideoWatch video = {video}/>)}
        {loading && [...Array(12)].map((item)=>{
          return <div className ="loading_skeleton" ></div>
        })}
        </Col>
    </Row>
    </>
  )
}

export default Watchscreen;