import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Amazon=()=>{
    return(
        <Card
        
        key={Sdata[3].id}
        sname={Sdata[3].sname}
        imgsrc={Sdata[3].imgscr}
        title={Sdata[3].title}
        link={Sdata[3].links}
        
        />
        
    );
}

export default Amazon;