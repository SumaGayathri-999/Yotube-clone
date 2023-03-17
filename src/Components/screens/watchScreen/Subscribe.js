import React from 'react';
import {useEffect} from 'react';
import { chananelSubscriptionStatus } from '../../../Redux/actions/channel_action';
import {useSelector,useDispatch} from 'react-redux';



function Subscribe({channelId}) {
    const dispatch = useDispatch();
    const {subscription} = useSelector(state=>{return state.channel_subs});
    let subsClass = subscription && "bg-secondary";

    useEffect(()=>{
        dispatch(chananelSubscriptionStatus(channelId));
      },[channelId])
  return (
    <div>
    <button className={`sub_btn ${subsClass}`}>{subscription  ? "Subscribed" : "subscribe"}</button>
    </div>
  )
}

export default Subscribe