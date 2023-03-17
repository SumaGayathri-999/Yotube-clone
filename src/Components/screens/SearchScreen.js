import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {get_search_videos} from '../../Redux/actions/videos_action';
import VideoWatch from '../videoWatch/VideoWatch'
import { Container } from 'react-bootstrap';
import './_searchscreen.scss';
import HelmetCustom from '../HelmetCustom';

function SearchScreen() {
    const {query} = useParams();
    const dispatch = useDispatch();
    const {videos,loading} = useSelector(state=>{return state.search_videos})
    useEffect(()=>{
        dispatch(get_search_videos(query));
    },[query])
  return (
    <>
    <div className ="left_elements">
    <HelmetCustom title ={query}/>

      {!loading ? (videos).map((video)=>{return <VideoWatch video = {video} key ={video.id.videoId} searchScreen/>}) : 
      [...Array(20)].map((item)=>{
        return <div className="loading_skeleton"></div>
      })
      }
    </div>
    </>
  )
}

export default SearchScreen