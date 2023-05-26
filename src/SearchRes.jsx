import React from "react";

const SearchRes=(props)=>{
    const img = `https://source.unsplash.com/200x200/?${props.name}`;
    return(
        <>
            <div>
                <img src={img} alt="pic"/>
            </div>
        </>
        
        
    )
}
export default SearchRes;