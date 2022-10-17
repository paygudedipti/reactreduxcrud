
import { GET_DETAILS } from "../type";
import {GetApiDetails} from "../../api/axiosRequest";
import { PostApiDetails } from "../../api/axiosRequest";
import { POST_DETAILS } from "../type";

const Action = () =>{

    return function(dispatch){
        return GetApiDetails()
        .then((res)=>{
            console.log("response data is ",res);

            dispatch({
               
                    type:GET_DETAILS,
                    payload:res.data                
            });
        });
    };

    
};

const PostApiAction = (request) =>{

    return function(dispatch){
        return PostApiDetails(request)
        .then((req)=>{
            console.log("response data is ",req);

            dispatch({
               
                    type:POST_DETAILS,
                    payload:''                
            });
        });
    };

    
};

export default {Action,PostApiAction};


