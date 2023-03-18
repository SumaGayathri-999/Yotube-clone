import React, { useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { get_categories_videos, get_popular_videos } from '../../../Redux/actions/videos_action';
import Categories from '../../categories/Categories';
import Video from '../../video/Video';
import SkeletonStructure from './SkeletonStructure';
import HelmetCustom from '../../HelmetCustom';

function HomeScreen() {
  const loadRef = useRef(null);
  const dispatch = useDispatch();
  const {videos,loading,activeCategory} = useSelector(state=>state.home_videos)

   useEffect(()=>{ 
     let loadVideosObserver = new IntersectionObserver(entries=>{
      const entry =entries[0];
      if(entry.isIntersecting){
         if(activeCategory === "All"){
             dispatch( get_popular_videos());
           }
           else{
             dispatch(get_categories_videos(activeCategory));
           }         
      }
    }
    ,{
      rootMargin:"50px"
      }
    );

    if(loadRef.current){
      loadVideosObserver.observe(loadRef.current);
    }
    
    return ()=>{
      if(loadRef.current){
        loadVideosObserver.unobserve(loadRef.current);
      }
    }
  },[activeCategory])
  

 
  return (
    <>
    <HelmetCustom />
     <Container fluid >
       <Categories />
        {/* <Row className ="left_elements mt-4">
         {videos && videos.map((video)=>{
          return (
            <>
            <Col lg={3} md={4} key={video.id} >
              <Video video = {video}/>
            </Col>
            </>
          )
         })
         } 
         </Row> */}
           <div className ="row left_elements mt-4"  ref ={loadRef} style = {{padding:"0px"}}>
            {!loading && [...Array(12)].map((item)=>{
                return(
                  <>
                  <Col lg={3} md={4} style={{margin:0,padding:"20px",height:"200px"}}>
                           <SkeletonStructure  />
                  </Col>
                  </>
                )
              })}
        </div> 
      </Container>
     </>
  );
}

export default HomeScreen;