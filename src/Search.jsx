import React, { useState } from "react";
import SearchRes from "./SearchRes";

const Search=()=>{
    const [img,setImg]=useState(" ");
    const inputEvent=(event)=>{
        const data = event.target.value;
        setImg(data);
    }
    return(
        <>
            <div className="search_bar">
                <input type='text' placeholder="search anything"  className="searchbar_input" value ={img} onChange={inputEvent}></input>
                {img === "" ? null :<SearchRes name={img}/>}
            </div>
            
            
        </>
    );
}
export default Search;