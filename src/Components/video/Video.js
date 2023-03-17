import React,{useState,useEffect} from 'react'
import { AiFillEye } from 'react-icons/ai'
import "./_video.scss";
import request from '../../api';
import moment from 'moment';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {useNavigate} from 'react-router-dom';

function Video({video}) {
  const {id,snippet:{channelId,channelTitle,title,publishedAt,thumbnails:{medium}}} = video;
  const video_id = id?.videoId || id;
  const [channelInfo,setChannelInfo] =useState();
  const [videoInfo,setVideoInfo] = useState();




  let views = videoInfo && videoInfo[0].statistics.viewCount;
  let duration = videoInfo && videoInfo[0].contentDetails.duration;
  let channelIcon = channelInfo && channelInfo[0].snippet.thumbnails.default.url;
  const navigate = useNavigate();
  const seconds = moment.duration(duration).asSeconds();
  const dur = moment.utc(seconds * 1000).format("mm:ss")
 

  useEffect(()=>{
    const get_videos_details = async()=>{
    const {data:{items}} = await request("/videos",{
      params:{
        part:"snippet,contentDetails,statistics",
        id:video_id,
      }
     });
     setVideoInfo(items);
    }
     get_videos_details();
  },[video_id]);

  useEffect(()=>{
    const get_channel_icon = async()=>{
    const {data:{items}} = await request("/channels",{
      params:{
        part:"snippet,statistics",
        id:channelId,
      }
     })
     setChannelInfo(items);
    }
    get_channel_icon();
  },[channelId])
  return (

    <div className="video" onClick = {()=>{navigate(`/watch/${video_id}`,{state:{videoInfo:videoInfo,channelInfo:channelInfo}})}} style={{width:"100%"}}>
      <div   className="video__thumb" style = {{height:"200px"}}>
        <LazyLoadImage  src={medium.url} alt="" width ="100%" height ="100%" loading = "lazy" style ={{backgroundColor:"grey",width:"100%"}}></LazyLoadImage >
        <span>{dur}</span>
      </div>
      <div className="video__title">
         <p>{title}</p>
      </div>
      <div className="video__details">
        <span><AiFillEye /> {numeral(views).format("0.a")} Views •</span>
        <span>{moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video__channel">
        <LazyLoadImage  src={channelIcon} alt="" width ="100%" height ="100%" loading = "lazy" style ={{backgroundColor:"grey"}}></LazyLoadImage>
        <span>{channelTitle}</span>
      </div>
    </div>
  )
}

export default Video