import React from "react";
import { NavLink } from "react-router-dom";

const Error=()=>{
    return(
        <>
        <h1>Error 404 </h1>
        <NavLink to="/">GO Back</NavLink>
</>    )
};

export default Error;