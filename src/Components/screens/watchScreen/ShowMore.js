import React,{useState} from 'react';

function ShowMore({description}) {
    const [show,setShow] = useState(false);
    return (
        <div className =" description">
          {show && <span  dangerouslySetInnerHTML={{__html:description}} /> }
          {!show && <span  dangerouslySetInnerHTML={{__html:description.substring(0,210).concat("...")}} />}
           <span onClick = {()=>{setShow(!show)}} style ={{color:"rgb(40, 145, 194)",cursor:"pointer"}} >{show ? "show less ":" show more"}</span>
        </div>
    )
}
export default ShowMore;
