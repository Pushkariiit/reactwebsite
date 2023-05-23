import React from 'react';
import Images from './Images';

function Card(props){
    return(
        <>
            <div className='cards'>
                <div className='card'>
                <Images imgsrc={props.imgsrc}></Images>
                    <div className='card_info'>
                        <span className='card_title'>
                            {props.title}
                        </span>
                        <h3 className='card_sname'>{props.sname}</h3>
                        <a href={props.link} target="_blank">
                        <button>Watch Now</button></a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;