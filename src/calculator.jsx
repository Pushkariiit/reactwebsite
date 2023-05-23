import React from 'react';

var a=0;
var b=0;
function Add(a,b){
    return a+b;
}
function Sub(a,b){
    return a-b;
}
function Mul(a,b){
    return a*b;
}

function Div(a,b){
    return (a/b).toFixed(2);
}

export {Add,Sub,Mul,Div};