import {COMMENT_LIST_REQUEST,COMMENT_LIST_SUCCESS,COMMENT_LIST_FAILURE,ADD_COMMENT_SUCCESS,ADD_COMMENT_FAILURE} from '../action_types';
import request from "../../api";
import { baseParams } from '../../api';

export const getComments = (videoId) => {
    return async (dispatch)=>{
        dispatch({type:COMMENT_LIST_REQUEST})
        try{
            const {data} = await request('/commentThreads',{
                params :{
                    ...baseParams,
                    part:"snippet",
                    videoId:videoId,
                },
            })
            dispatch({
                type:COMMENT_LIST_SUCCESS,
                payload:data.items
            })            
        }
        catch(err){
            dispatch({
                type:COMMENT_LIST_FAILURE,
                payload:err.message
            })
        }

    }
}



export const addComments = (videoId,text) => {
    return async (dispatch,getState)=>{
        const body_obj = {
            snippet :{
                videoId:videoId,
                topLevelComment:{
                    snippet : {
                        textOriginal:text,
                    }
                }
            }
        }
        try{
             await request.post('/commentThreads',body_obj,{
                params :{
                    ...baseParams,
                    part:"snippet",
                },
                headers:{
                    Authorization: `Bearer ${getState().auth.accesstoken}`,
                }
            })
            dispatch({
                type:ADD_COMMENT_SUCCESS
            })
            setTimeout(()=>{dispatch(getComments(videoId))},3000)          
        }
        catch(err){
            dispatch({
                type:ADD_COMMENT_FAILURE,
                payload:err.message
            })
        }

    }
}