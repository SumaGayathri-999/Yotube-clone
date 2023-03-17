import React from 'react'
import SkeletonComponent from './SkeletonComponent';

function SkeletonStructure() {
  return (
    <div class = "skeleton__wrapper mb-5" >
      <SkeletonComponent type = "video"></SkeletonComponent>
        <div className ="d-flex  " style ={{height:"17%"}}>
          <div  style ={{width:"20%"}}>
            <SkeletonComponent type = "channel"></SkeletonComponent>
          </div>
          <div  style ={{width:"77%",marginLeft:"3%"}}>
              <SkeletonComponent type = "mini_content" ></SkeletonComponent>
          </div>
        </div>


    </div>
  )
}

export default SkeletonStructure;