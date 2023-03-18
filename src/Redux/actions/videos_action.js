import request from "../../api";
import { HOME_VIDEOS_REQUEST,HOME_VIDEOS_SUCCESS,HOME_VIDEOS_FAILURE,SEARCH_VIDEOS_REQUEST,SEARCH_VIDEOS_SUCCESS,SEARCH_VIDEOS_FAILURE} from "../action_types";
import {baseParams} from '../../api';

export const get_popular_videos = ()=>{
    return async (dispatch,getState)=>{
        try{
            dispatch({type:HOME_VIDEOS_REQUEST});
            const {data} = await request("/videos",{
              params:{
                  ...baseParams,
                  part:"snippet,contentDetails,statistics",
                  chart:"mostPopular",
                  regionCode:"IN",
                  maxResults:12,
                  pageToken:getState().home_videos.nextpagetoken,
              }
            })
            dispatch({
                type:HOME_VIDEOS_SUCCESS,
                payload:{
                   videos: data.items,
                   nextPageToken:data.nextPageToken,
                   category:"All"
                }
            })
        }
        catch(err){
            dispatch({
                type:HOME_VIDEOS_FAILURE,
                payload:err.message
            })
        }

    }
}

export const get_categories_videos = (keyword)=>{
    return async (dispatch,getState)=>{
        try{
            dispatch({type:HOME_VIDEOS_REQUEST});
            const {data} = await request("/search",{
              params:{
                  ...baseParams,
                  part:"snippet",
                  maxResults:12,
                  q:keyword,
                  pageToken:getState().home_videos.nextpagetoken,
                  type:"video",
              }
            })
            dispatch({
                type:HOME_VIDEOS_SUCCESS,
                payload:{
                   videos: data.items,
                   category:keyword,
                   nextPageToken:data.nextPageToken
                }
            })
        }
        catch(err){
            dispatch({
                type:HOME_VIDEOS_FAILURE,
                payload:err.message
            })
        }

    }
}



export const get_search_videos = (keyword)=>{
    return async (dispatch)=>{
        try{
            dispatch({type:SEARCH_VIDEOS_REQUEST});
            const {data} = await request("/search",{
              params:{
                  ...baseParams,
                  part:"snippet",
                  maxResults:20,
                  q:keyword,
                  type:"video",
              }
            })
            dispatch({
                type:SEARCH_VIDEOS_SUCCESS,
                payload:data.items,
            })
        }
        catch(err){
            dispatch({
                type:SEARCH_VIDEOS_FAILURE,
                payload:err.message
            })
        }

    }
}