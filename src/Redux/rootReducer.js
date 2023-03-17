import { combineReducers } from "redux";
import { authReducer } from "./reducers/auth_reducer";
import { videoReducer }  from "./reducers/videos_reducer";
import { channelReducer } from './reducers/channel_reducer';
import { commentReducer } from "./reducers/comment_reducer";
import { searchReducer} from './reducers/videos_reducer'

export const rootReducer = combineReducers({
   auth: authReducer,
   home_videos : videoReducer,
   channel_subs : channelReducer,
   video_comments : commentReducer,
   search_videos : searchReducer,
})