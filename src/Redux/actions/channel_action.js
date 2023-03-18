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


// https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&forChannelId=UCaooZvg_gT3gagtkbqJCxMw&mine=true&access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjU4ODI0YTI2ZjFlY2Q1NjEyN2U4OWY1YzkwYTg4MDYxMTJhYmU5OWMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiS29uYWxhIFN1bWEgR2F5YXRocmkiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUdObXl4Yk91akFGMmVJOTlJWDBmZTV5bEN4Q1NYUC1DMkp5XzI5Z21EbWw9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20veW91dGItY2xvbmUiLCJhdWQiOiJ5b3V0Yi1jbG9uZSIsImF1dGhfdGltZSI6MTY3ODM2NTQxMCwidXNlcl9pZCI6IjgzbVY5TG1Jd1VnWW5LOXYyTmxwaFNhZDk4bjEiLCJzdWIiOiI4M21WOUxtSXdVZ1luSzl2Mk5scGhTYWQ5OG4xIi%E2%80%A6pdGllcyI6eyJnb29nbGUuY29tIjpbIjEwNjcyNjg1ODc1MzQxNjA5Njc4MiJdLCJlbWFpbCI6WyJzdW1hZ2F5YXRocmlrb25hbGE5MzkzQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.sGAyjw269g6njtJfgIh5-_2auce6kKK3tmWIgTVT6B-MerT6jJ4gDfoRLRRpLQE69_JD66XRLt94I1XWu2NI1OTvoQ1m2jF7Z9iXopgtjHrK61ZvSvG26ycIHwS79iuMnwbnczdtdeiJrnU_fNHdflTDBhTSGBclCXxULzO8_LY75OYsM2hcFa0esqg-gZXCCFGIhW3FMHKjqEQiP4I4BIk--e9uIcq2XHd0MR531QfNDMHMIpD6L7TTmHPwdvgiZR37OTJqroflP9nlKEZKqOs0GeK42cUkqYX-lFGCcbbUhHBIAHHsy_JAHYG0ygj-w6FLXmNRrV0L0PZTnXiOzg&key=[YOUR_API_KEY] HTTP/1.1
// https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&forChannelId=UCaooZvg_gT3gagtkbqJCxMw&mine=true&access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjU4ODI0YTI2ZjFlY2Q1NjEyN2U4OWY1YzkwYTg4MDYxMTJhYmU5OWMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiS29uYWxhIFN1bWEgR2F5YXRocmkiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUdObXl4Yk91akFGMmVJOTlJWDBmZTV5bEN4Q1NYUC1DMkp5XzI5Z21EbWw9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20veW91dGItY2xvbmUiLCJhdWQiOiJ5b3V0Yi1jbG9uZSIsImF1dGhfdGltZSI6MTY3ODM2NTQxMCwidXNlcl9pZCI6IjgzbVY5TG1Jd1VnWW5LOXYyTmxwaFNhZDk4bjEiLCJzdWIiOiI4M21WOUxtSXdVZ1luSzl2Mk5scGhTYWQ5OG4xIi%E2%80%A6pdGllcyI6eyJnb29nbGUuY29tIjpbIjEwNjcyNjg1ODc1MzQxNjA5Njc4MiJdLCJlbWFpbCI6WyJzdW1hZ2F5YXRocmlrb25hbGE5MzkzQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.sGAyjw269g6njtJfgIh5-_2auce6kKK3tmWIgTVT6B-MerT6jJ4gDfoRLRRpLQE69_JD66XRLt94I1XWu2NI1OTvoQ1m2jF7Z9iXopgtjHrK61ZvSvG26ycIHwS79iuMnwbnczdtdeiJrnU_fNHdflTDBhTSGBclCXxULzO8_LY75OYsM2hcFa0esqg-gZXCCFGIhW3FMHKjqEQiP4I4BIk--e9uIcq2XHd0MR531QfNDMHMIpD6L7TTmHPwdvgiZR37OTJqroflP9nlKEZKqOs0GeK42cUkqYX-lFGCcbbUhHBIAHHsy_JAHYG0ygj-w6FLXmNRrV0L0PZTnXiOzg&key=AIzaSyA3zCZw4vj5b-EebbQNaW1gX66WUMgkUM4' \

// eyJhbGciOiJSUzI1NiIsImtpZCI6IjU4ODI0YTI2ZjFlY2Q1NjEyN2U4OWY1YzkwYTg4MDYxMTJhYmU5OWMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiS29uYWxhIFN1bWEgR2F5YXRocmkiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUdObXl4Yk91akFGMmVJOTlJWDBmZTV5bEN4Q1NYUC1DMkp5XzI5Z21EbWw9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20veW91dGItY2xvbmUiLCJhdWQiOiJ5b3V0Yi1jbG9uZSIsImF1dGhfdGltZSI6MTY3ODM2NTQxMCwidXNlcl9pZCI6IjgzbVY5TG1Jd1VnWW5LOXYyTmxwaFNhZDk4bjEiLCJzdWIiOiI4M21WOUxtSXdVZ1luSzl2Mk5scGhTYWQ5OG4xIi…pdGllcyI6eyJnb29nbGUuY29tIjpbIjEwNjcyNjg1ODc1MzQxNjA5Njc4MiJdLCJlbWFpbCI6WyJzdW1hZ2F5YXRocmlrb25hbGE5MzkzQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.sGAyjw269g6njtJfgIh5-_2auce6kKK3tmWIgTVT6B-MerT6jJ4gDfoRLRRpLQE69_JD66XRLt94I1XWu2NI1OTvoQ1m2jF7Z9iXopgtjHrK61ZvSvG26ycIHwS79iuMnwbnczdtdeiJrnU_fNHdflTDBhTSGBclCXxULzO8_LY75OYsM2hcFa0esqg-gZXCCFGIhW3FMHKjqEQiP4I4BIk--e9uIcq2XHd0MR531QfNDMHMIpD6L7TTmHPwdvgiZR37OTJqroflP9nlKEZKqOs0GeK42cUkqYX-lFGCcbbUhHBIAHHsy_JAHYG0ygj-w6FLXmNRrV0L0PZTnXiOzg