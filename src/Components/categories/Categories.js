import React,{useState} from 'react'
import './_categories.scss';
import {useDispatch} from 'react-redux';
import { get_categories_videos } from '../../Redux/actions/videos_action';

function Categories() {
  const dispatch = useDispatch();
  const [activeElement,setActiveElement] = useState("All");
  const keywords = ["All","ReactJs","Mr.Bean","Entertainment","Music","Comedy","Movies","Redux","Saas","Javascript","Indian Cuisine","Web Development","saree","Fashion","Dulquer Salman","Movies","Space","Politics","Army","Bussiness Ideas","Snacks","Sales","Stocks","Live","Saree","News","computer Science","Recruitment","Retail","Programming","Python","Java","Academy Awards"];
  const handleActive = (item) =>{
    setActiveElement(item);
    dispatch(get_categories_videos(item));
  }
  return (
    <div className="categories left_elements mt-2" >
      {keywords.map((item,index)=>{return (
        <>
          <span key = {index} className= {activeElement === item ? "active" :""} onClick={()=>{handleActive(item)}}>{item}</span>
        </>
      )})}
    </div>
  )
}

export default Categories;