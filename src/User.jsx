import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const User=()=>{
    const {fname,lname}=useParams();
    const location = useLocation();
    const history=useNavigate();
    const Alert=()=>{
        return(
            history(-1)
            
        )
    }
    return(
        <>
            
            <h1>My Name is {fname} {lname}</h1>
            <p>My Current Location is {location.pathname}</p>

            {location.pathname===`/user/vinod/thappa` ? (
                <button onClick={Alert}>Click Me</button>
            ):null}

        </>
    )
}
export default User;