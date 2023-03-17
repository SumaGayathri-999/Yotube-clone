import {COMMENT_LIST_REQUEST,COMMENT_LIST_SUCCESS,COMMENT_LIST_FAILURE} from '../action_types';

export const commentReducer = (state = {loading:false,comments:null},action) => {
   switch(action.type){
       case COMMENT_LIST_REQUEST : 
       return {
        ...state,
        loading:true,
       }
       case COMMENT_LIST_SUCCESS :
        return {
            loading:false,
            comments:action.payload,
        }
        case COMMENT_LIST_FAILURE :
            return {
                loading:false,
                comments:action.payload,
            }
       default :
          return state;
   }
}