import request from '../../api';
import {baseParams} from '../../api';
import {SET_SUBSCRIPTION_STATUS} from '../action_types';

export const chananelSubscriptionStatus = (id)=>{
    return async(dispatch,getState)=>{
        try {
            const { data } = await request('/subscriptions', {
               params: {
                  ...baseParams,
                  part: 'snippet',
                  forChannelId: id,
                  mine: true,
               },
               headers: {
                  Authorization: `Bearer ${getState().auth.accesstoken}`,
               },
            })
            dispatch({
               type: SET_SUBSCRIPTION_STATUS,
               payload: data.items.length !== 0,
            })
         } catch (error) {
            console.log(error.response.data)
         }
    }
}


