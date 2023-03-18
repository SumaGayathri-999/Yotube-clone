import firebase from 'firebase/compat/app';
import auth from "../../firebase";
import { LOAD_PROFILE, LOGIN_REQUEST, LOGIN_SUCCESS,LOGIN_FAILURE,LOG_OUT} from '../action_types';
export const login = () => {
    return async (dispatch) => {
       try{
           dispatch({type:LOGIN_REQUEST});
           const provider = new firebase.auth.GoogleAuthProvider()
           provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
           const res = await auth.signInWithPopup(provider);
           const accesstoken =res.credential.accessToken;
           const profile = {
            name:res.additionalUserInfo.profile.name,
            photourl: res.additionalUserInfo.profile.picture,
           }
           sessionStorage.setItem("access_token", accesstoken);
           sessionStorage.setItem("profile", JSON.stringify(profile))
           dispatch({type:LOGIN_SUCCESS,payload:accesstoken});
           dispatch({type:LOAD_PROFILE,payload:profile})          
       }
       catch(err){
           dispatch({type:LOGIN_FAILURE,payload:err.message})
       }
    }
}
export const logout = ()=>{
    return async(dispatch)=>{
        await auth.signOut(auth);
        dispatch({
            type:LOG_OUT,
        })
        sessionStorage.removeItem("access_token")
        sessionStorage.removeItem("profile")

    }

}





