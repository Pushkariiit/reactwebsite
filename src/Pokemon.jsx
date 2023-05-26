import React,{useEffect, useState} from "react";
import axios from 'axios';
const Pokemon=()=>{
    const [num,setNum]=useState();
    const [name,setName]=useState();
    const [moves,setMoves]=useState();
    const inputEvent=(event)=>{
        setNum(event.target.value);
    }

    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        getData();

    })
    return(
        <>
        <h1 className="heading">You choose value <span style={{color:"yellow"}}>{num}</span> </h1>
        <h1 className="heading" >I am <span style={{color:"red"}}>{name}</span> </h1>
        <h1 className="heading">I have <span style={{color:"green"}}>{moves}</span>moves</h1>
            <select className="poke" value={num} onChange={inputEvent} style={{fontSize:"40px"}}>
                <option value='1'>1</option>
                <option value='25'>25</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
        </>
    )
}
export default Pokemon;