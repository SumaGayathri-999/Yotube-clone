import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap';
import {LazyLoadImage} from 'react-lazy-load-image-component'
import { AiFillEye } from 'react-icons/ai'
import moment from 'moment';
import numeral from 'numeral';
import './_videoWatch.scss';
import request from '../../api';
import {useNavigate} from 'react-router-dom';


function VideoWatch({video,searchScreen}) {
   const {id,snippet:{channelId,channelTitle,title,publishedAt,thumbnails:{medium}}} = video;
   const video_id = id?.videoId || id;
   const [channelInfo,setChannelInfo] =useState();
   const [videoInfo,setVideoInfo] = useState();
 
   let views = videoInfo && videoInfo[0].statistics.viewCount;
   let duration = videoInfo && videoInfo[0].contentDetails.duration;
   let channelIcon = channelInfo && channelInfo[0].snippet.thumbnails.default.url;
   const navigate = useNavigate();

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
 
    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')
  return (
    <Row className ='videoWatch p-1 d-flex align-items-center' onClick = {()=>{navigate(`/watch/${video_id}`,{state:{videoInfo:videoInfo,channelInfo:channelInfo}})}}>
        <Col xs={6} md={searchScreen ? 4 :6} className ="videoWatch__left">
            <LazyLoadImage  src={medium.url}
               effect='blur'
               className='videoWatch__thumbnail' wrapperClassName = "videoWatch__thumbnail-wrapper" />
            <span className ="videoWatch__duration">{_duration}</span>
        </Col>
        <Col xs={6} md={searchScreen ? 8 :6} className='videoWatch__right p-0'>
            <h6 className='videoWatch__title mb-1'>
               {title}
            </h6>
            <div className='videoWatch__details'>
               <AiFillEye /> {numeral(views).format('0.a')} Views •
               {moment(publishedAt).fromNow()}
            </div>

            <div className='videoWatch__channel d-flex align-items-center  my-1 '>
               <LazyLoadImage
               src={channelIcon}
               effect='blur'
            />
               <div>{channelTitle}</div>
            </div>
        </Col>
    </Row>
  )
}

export default VideoWatch