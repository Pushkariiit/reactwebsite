// import React from 'react';
// import ReactDOM from 'react-dom';

//ReactDOM.render(<h1>Hello World</h1>,document.getElementById('root'));

// ReactDOM.render([
//   <h1>Hello world</h1>,
//   <p>My name is Pushkar</p>,
// ],
// document.getElementById("root"));

//ReactDOM.render(React.createElement("h1",null,"Hello world again"),document.getElementById("root"));

// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World twice";
// document.getElementById("root").appendChild(h1);

// import React from 'react';
// import ReactDOM from 'react-dom';

// import './index.css';

// const cdate = new Date().toLocaleDateString();
// const name = "Pushkar";
// const ctime = new Date().toLocaleTimeString();

// const img1="https://picsum.photos/200/300";
// const img2="https://picsum.photos/250/300";
// const img3="https://picsum.photos/300/300";

// const link3="https://www.instagram.com/pushkar2610_/";
// ReactDOM.render(
//   <>
    //{/* <h1 contentEditable='true'>Hello , MY name is {name}</h1> */}
    //<h1 className='heading'>Hello , MY name is {name}</h1>
    //{/* <p>Current Date is = {cdate} </p>
    //<p>Current Time is = {ctime} </p> */}

//     <div className='imgsrc'>

//     <img src={img1} alt="random"/>
//     <img src={img2} alt="random"/>
//     <a href={link3} target="_pushkar">
//     <img src={img3} alt="random"/>
//     </a>

//     </div>
    
//   </>,
//   document.getElementById("root")
// );


// import React from 'react';
// import ReactDOM from 'react-dom';

// import './index.css';

// const currTime = new Date().getHours();

// const cssStyle={ };

// var greet=" ";

// if(currTime>1 && currTime<12){
//   greet="Good Morning";
//   cssStyle.color="Green";
// }
// else if(currTime>=12 && currTime<19){
//   greet="Good Afternoon";
//   cssStyle.color="red";
// }
// else{
//   greet="Good Night";
//   cssStyle.color="pink";
// }
// ReactDOM.render(
  // <>
  // <div>
  // <h1 >Hello sir, {currTime} <span style={cssStyle}> {greet}</span></h1>

  // </div>
    
//   </>,
//   document.getElementById("root")
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css"
// import App from './App';

// ReactDOM.render(
//   <App/>,
//   document.getElementById("root")
// );

// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';

// ReactDOM.render(<App/>,document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';

// import Card from './Card';
// import './index.css';
// import Sdata from './Sdata';

// function ncard(val){


//   return(<Card
//       sname={val.sname}
//       imgsrc={val.imgscr}
//       title={val.title}
//       link={val.links}
//     />);
// }
// ReactDOM.render(
//   <>
//   <h1 className='heading_style'>List of Top 6 Netflix Series in 2020</h1>
    // {/* <Card
    //   sname={Sdata[0].sname}
    //   imgsrc={Sdata[0].imgscr}
    //   title={Sdata[0].title}
    //   link={Sdata[0].links}
    // />

    // <Card
    //   sname={Sdata[1].sname}
    //   imgsrc={Sdata[1].imgscr}
    //   title={Sdata[1].title}
    //   link={Sdata[1].links}
    // />
    // <Card
    //   sname={Sdata[2].sname}
    //   imgsrc={Sdata[2].imgscr}
    //   title={Sdata[2].title}
    //   link={Sdata[2].links}
    // />
    // <Card
    //   sname={Sdata[3].sname}
    //   imgsrc={Sdata[3].imgscr}
    //   title={Sdata[3].title}
    //   link={Sdata[3].links}
    // />
    // <Card
    //   sname={Sdata[4].sname}
    //   imgsrc={Sdata[4].imgscr}
    //   title={Sdata[4].title}
    //   link={Sdata[4].links}
    // /> */}

    //{/* {Sdata.map(ncard)} */}

    // {/* {Sdata.map(function ncard(val){
    //   return(<Card
    //   sname={val.sname}
    //   imgsrc={val.imgscr} 
    //   title={val.title}
    //   link={val.links}
    // /> );
    // })} */}

//     {/* {Sdata.map((val,index)=>{
//       console.log(index);
//       return(<Card
//       sname={val.sname}
//       imgsrc={val.imgscr}
//       title={val.title}
//       link={val.links}
//     /> );
//     })}
//   </>,document.getElementById('root')
// ); 
// */}



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import Pokemon from './Pokemon';

ReactDOM.render(
  <BrowserRouter><App/></BrowserRouter>
  ,document.getElementById('root')
);