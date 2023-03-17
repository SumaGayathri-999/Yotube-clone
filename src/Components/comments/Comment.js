import React from 'react';
import './_comment.scss';
import moment from 'moment';
import ShowMore from '../screens/watchScreen/ShowMore';

function comment({comment}) {
  const {authorDisplayName,authorProfileImageUrl,publishedAt,textDisplay} = comment;
  return (
    <div className ="comment d-flex my-2 py-2" >
       <img referrerPolicy="no-referrer"  src={authorProfileImageUrl} alt="" />
       <div className ="comment__body">
           <h6>{authorDisplayName} • {moment(publishedAt).fromNow()} </h6>
           <span>
            {textDisplay.length > 200 ? <ShowMore description = {textDisplay} /> : <span dangerouslySetInnerHTML={{__html:textDisplay}} />}
           </span>
       </div>
    </div>
  )
}

export default comment