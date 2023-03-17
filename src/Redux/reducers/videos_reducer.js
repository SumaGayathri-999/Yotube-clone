import { HOME_VIDEOS_REQUEST,HOME_VIDEOS_SUCCESS,HOME_VIDEOS_FAILURE,SEARCH_VIDEOS_REQUEST,SEARCH_VIDEOS_SUCCESS,SEARCH_VIDEOS_FAILURE } from "../action_types"
const video_state = {
    videos:[],
    nextpagetoken:"",
    loading:false,
    activeCategory:"All"
}
export const videoReducer = (state = video_state,action)=>{
    switch(action.type){
        case HOME_VIDEOS_REQUEST : {
            return {
                ...state,
                loading:true,
            }
        }
        case HOME_VIDEOS_SUCCESS : {
            return {
                videos:action.payload.category === state.activeCategory ? [...state.videos,...action.payload.videos] : action.payload.videos,
                nextpagetoken:action.payload.nextPageToken,
                loading:false,
                activeCategory:action.payload.category
            }
        }
        case HOME_VIDEOS_FAILURE : {
            return {
                ...state,
                videos:action.payload,
                nextpagetoken:action.payload.nextPageToken,
                loading:false
            }
        }
        default : {
            return state;
        }

    }
}

export const searchReducer = (state = {loading:true,videos:[]},action)=>{
    switch(action.type){
        case SEARCH_VIDEOS_REQUEST : {
            return {
                ...state,
                loading:true,
            }
        }
        case SEARCH_VIDEOS_SUCCESS : {
            return {
               ...state,
               videos:action.payload,
               loading:false,
            }
        }
        case SEARCH_VIDEOS_FAILURE : {
            return {
                ...state,
                 videos: action.payload,
                loading:false
            }
        }
        default : {
            return state;
        }

    }
}