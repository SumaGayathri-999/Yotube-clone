import axios from 'axios';
const KEY = "AIzaSyA3zCZw4vj5b-EebbQNaW1gX66WUMgkUM4"
export const baseParams = {
    key:KEY
}
const request = axios.create(
   { baseURL : "https://youtube.googleapis.com/youtube/v3",
 }
)
export default request;