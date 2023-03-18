import axios from 'axios';
const request = axios.create(
   { baseURL : "https://youtube.googleapis.com/youtube/v3",
    params:{
        key:"AIzaSyA3zCZw4vj5b-EebbQNaW1gX66WUMgkUM4"
    }}
)
export default request;