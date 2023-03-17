import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,LOG_OUT,LOAD_PROFILE} from '../action_types';

const initialState = {
    accesstoken:sessionStorage.getItem("access_token") ? sessionStorage.getItem("access_token"):null,
    user:sessionStorage.getItem("profile") ? JSON.parse(sessionStorage.getItem("profile")):null,
    loading:false,
}

export const authReducer = (state=initialState,action)=>{
    switch(action.type){
        case LOGIN_REQUEST : 
        return {
            ...state,
            loading:true,
        }
        case LOGIN_SUCCESS :
            return {
                ...state,
                accesstoken:action.payload,
                loading:false,
            }
        case LOGIN_FAILURE :
            return {
                ...state,
                accesstoken:null,
                loading:false,
                error:action.payload,
            }
       case LOAD_PROFILE :
            return {
                ...state,
                user:action.payload,
            }
        case LOG_OUT : 
            return {
             ...state,
             accesstoken:null,
             user:null,
            }
        default : 
           return state;
     }

}