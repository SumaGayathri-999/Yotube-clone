import {SET_SUBSCRIPTION_STATUS} from '../action_types';

export const channelReducer = (state = {subscription:false},action)=>{
   switch(action.type){
      case SET_SUBSCRIPTION_STATUS : {
        return {subscription:action.payload}
      }
       default : {
         return state;
      }
   }
}