// import React from 'react';

// import Heading from './Heading';
// import Para from './Para';
// import List from './List';

// function App(){
//     return(
//         <>
//             <Heading/>
//             <Para/>
//             <List/>
//         </>
//     )
// }

// export default App;


// import React from 'react';
// function App(){
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


//     return(
//         <>
//         <div>
//         <h1 >Hello sir, {currTime} <span style={cssStyle}> {greet}</span></h1>
      
//         </div>
//         </>
//     );
// }

// export default App;

// import React from 'react';
// import {Add,Sub,Mul,Div} from './calculator';

// function App(){
//     return (
//         <>
//     <ol>
//       <li>Sum of two no. is {Add(40,4)}</li>
//       <li>Sub of two no. is {Sub(40,4)}</li>
//       <li>Mul of two no. is {Mul(40,4)}</li>
//       <li>Div of two no. is {Div(41,3)}</li>
//     </ol>
//   </>
//     );
// }

// export default App;

// import React from 'react';
// import Amazon from './Amazon';
// import Netflix from './Netflix';

// const favSeries="netflix";

// const FavS=()=>{
//   if(favSeries==="netflix"){
//     return <Netflix/>;
//   }
//   else{
//     return <Amazon/>;
//   }
// }


// const App=()=>{
//   return(
//     <>
//   <h1 className='heading_style'>List of Top 6 Netflix Series in 2020</h1>
//   {/* <FavS/> */}

//   {favSeries==='netflix'?<Netflix/>:<Amazon/>}
//   </>
//   );
// }

// export default App;

// import React from "react";
// import SlotM from "./SlotMachine";

// const App=()=>{
//   return(
//     <>
//     <h1 className="heading_style"> 🎰 Welcome to <span style={{fontWeight:"bold"}}>Slot Machine Game 🎰</span> </h1>
//     <div className="slotMachine">
//       <SlotM x = "😄" y = "😄" z = "😄"   /> <hr/>
//       <SlotM x = "😄" y = "😏" z = "😄" /><hr/>
//       <SlotM x = "🍌" y = "🍌" z = "🍎" /><hr/>
//       <SlotM x = "🐘" y = "🐘" z = "🐘"/><hr/>
//     </div>
      
//     </>
//   )
// }
// export default App;

// import React,{useState} from 'react';

// const App=()=>{

//   const [count,setCount]=useState(5);

//   const IncNum=()=>{
//     if(count>=1){
//       setCount(count-1);
//     }
    
//   }

//   return(
//     <>
//       <h1>{count}</h1>
//       <button onClick={IncNum}>Click</button>
//     </>
//   );
// }

// export default App;
// import React,{useState} from 'react';

// const App=()=>{

//   let currTime = new Date().toLocaleTimeString();

//   const [Time,setTime]=useState(currTime);

//   const UpdateTimes=()=>{
//     let time=new Date().toLocaleTimeString();
//     setTime(time);
//   };

//   return(
//     <>
//       <h1>{Time}</h1>
//       <button onClick={UpdateTimes}>Click Me For time</button>
//     </>
//   );
// }
// export default App;

// import React,{useState} from 'react';

// const App=()=>{

//   let currTime = new Date().toLocaleTimeString();

//   const[Time,settime]=useState(currTime);

//   const UpdateTime=()=>{
//     let currTime=new Date().toLocaleTimeString();
//     settime(currTime);
//   };

//   setInterval(UpdateTime,1000);
//   return(
//     <>
//       <h1>{currTime}</h1>
//     </>
//   );
// }

// export default App;

// import React,{useState} from 'react';

// const App=()=>{

//   let initial ="#8e44ad";
//   const[bg,setBg]=useState(initial);
//   const [name,setName]=useState('Click Me');

//   const bgChange=()=>{
//     let newC = "#34495e";
//     setBg(newC);
//     setName('Ouuch 😧!!');
//   }

//   const bgChanges=()=>{
//     let initial ="#8e44ad";
//     setBg(initial);
//     setName("huhhh 😠!!!");
//   }

//   return(
//     <>
//     <div style={ { backgroundColor:bg } }>
//     <button onMouseOver={bgChange} onMouseLeave={bgChanges}>{name}</button>
//     </div>
      
//     </>
//   )
// }
// export default App;

// import React,{useState} from 'react';

// const App=()=>{

//   const [fname,newFirstName]=useState("");

//   const [lname,newlastName]=useState("");

//   const [fullname,setFullName]=useState();
  
//   const [lastname,setLastName]=useState();

//   const inputEvent=(event)=>{
//     newFirstName(event.target.value);
//   }

//   const inputEvents=(event)=>{
//     newlastName(event.target.value);
//   }

//   const updateName=(event)=>{
//     event.preventDefault();

//     setFullName(fname);

//     setLastName(lname);

//   }


//   return(
//     <>
//     <form onSubmit={updateName}>
//     <div>
//     <h1>Hello {fullname} {lastname}</h1>
//       <input type="text" placeholder='Enter Your First Name here' onChange={inputEvent} value={fname}></input>
      
    
    
//       <h1>Last Name </h1>
//       <input type='text' placeholder="Enter your last Name here" onChange={inputEvents} value={lname}></input>

//       <button type='submit'> Click Me 👍 </button>
//     </div>
//     </form>
    
    
//     </>
//   );
// }

// export default App;

// import React,{useState} from 'react';

// const App=()=>{

//   const [fullname,setFullname]=useState({
//     fname:"",
//     lname:"",
//     email:"",
//     phone:'',
//   });

//   const InputEvent=(event)=>{
//     // const value = event.target.value;
//     // const name = event.target.name;

//     // using object destructuring feature of es6

//     const {value,name} = event.target;

//     setFullname((preValue)=>{
    

//       return{
//         ...preValue,
//         [name]:value,
//       };

//         // if(name==="fname"){
//         //   return{
//         //     fname:value,
//         //     lname:preValue.lname,
//         //     email:preValue.email,
//         //     phone:preValue.phone,
//         //   };
//         // }

//         // else if(name==="lname"){
//         //   return{
//         //     fname:preValue.fname,
//         //     lname:value,
//         //     email:preValue.email,
//         //     phone:preValue.phone,
//         //   };
//         // }

//         // else if(name==="email"){
//         //   return{
//         //     fname:preValue.fname,
//         //     lname:preValue.lname,
//         //     email:value,
//         //     phone:preValue.phone,
//         //   };
//         // }

//         // else if(name==="phone"){
//         //   return{
//         //     fname:preValue.fname,
//         //     lname:preValue.lname,
//         //     email:preValue.email,
//         //     phone:value,
//         //   };
//         // }
      
//     });
//   }

//   const updateNow=(event)=>{
//     event.preventDefault();
//     alert("form submitted");
//   };
//   return(
//     <>
      
//         <form onSubmit={updateNow}>
//         <div>
//           <h1>Hello {fullname.fname} {fullname.lname}</h1>
          
//           <p>{fullname.email}</p>
//           <p>{fullname.phone}</p>
//           <input type="text" placeholder="Enter your First Name here" name="fname" onChange={InputEvent} value={fullname.fname}></input>
//           <br/>
//           <h1>Last Name</h1>
//           <input type="text" placeholder="Enter your Last Name here" name="lname" onChange={InputEvent} value={fullname.lname}></input>
//           <br/>
//           <h1>email</h1>
//           <input type="email" placeholder='Enter your Email here' name='email' onChange={InputEvent} value={fullname.email} />
//           <br/>
//           <h1>Phone No.</h1>
//           <input type="number" placeholder='Enter your phone no. here' name='phone' onChange={InputEvent} value={fullname.phone} />
//           <br/>
//           <button type="submit">Click Me 👍</button>
//           </div>
//         </form>
      
//     </>
//   );
// }

// export default App;

// TodoList 

// import React,{useState} from 'react';
// import ToDoLists from './ToDoLists';

// const App=()=>{

//     const[inputList,setInputList]=useState("");
//     const[Items,setItems] = useState([]);

//     const itemEvent=(event)=>{
//         setInputList(event.target.value);
//     }

//     const listOfItems=()=>{

//         if(inputList != "")
//         {
//           setItems((oldItmes)=>{
//             return [...oldItmes, inputList]
//         });

//         // setItems((oldItmes)=>{
            
//         //     return [...oldItmes,inputList];
//         // });
//         setInputList("");
//     }};

//     const deleteItems =(id)=>{
//         setItems((oldItmes)=>{
//             return oldItmes.filter((arrElements,index)=>{
//                 return index!== id;
//             });
//         });
//     }

//     return(
//         <>
//             <div className='main_div'>
//                 <div className='center_div'>
//                 <br/>
//                 <h1>TodoList</h1>
//                 <br/>
                    
//                     <input type='text' placeholder='Add Item' 
//                         onChange={itemEvent}
//                         value={inputList}
//                     />
//                     <button onClick={listOfItems}> + </button>

//                     <ol>
                        

//                             {Items.map((itemval,index)=>{
//                                 return(<ToDoLists 
//                                 key={index} 
//                                 id={index}
//                                 text={itemval}
//                                 onSelect={deleteItems}
//                                 />)
//                             })}
                        
//                     </ol>
//                 </div>
//             </div>
//         </>
//    );
// }
// export default App;

// import React,{useState} from 'react';
// // import AddIcon from '@mui/icons-material/Add';
// import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';
// // import DeleteIcon from '@mui/icons-material/Delete';
// import Button from '@material-ui/core/Button';
// import { Tooltip } from '@material-ui/core';
// import Clock from 'react-digital-clock';

// const App=()=>{

//     const[count,setCount]=useState(0);
//     const inputEvent=()=>{
//         setCount(count+1);
//     }
    
   
//     const inputEventtwo=()=>{
//         if(count==0){
//             return (
//                 alert('Value can not be negative')
//             )
//         }
//             setCount(count-1);
            
        
        
//     }
//     return(
//         <>
//             <div className="main_div">
//             <Clock />
//                 <div className='center_div'>
                
//                     <h1>{count}</h1>
//                     <div className='btn_div'>
//                     <Tooltip title='Add' >
//                     <Button onClick={inputEvent} className='btn_green'><AddIcon/></Button>
//                     </Tooltip>
//                     <Tooltip title='Delete' >
//                     <Button onClick={inputEventtwo} className='btn_red'><DeleteIcon/></Button>
//                     </Tooltip>
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }
// export default App;

// import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// const App=()=>{
//     return(
//         <>
//             <h1 className="text-center text-danger my-5">Welcome To My Website</h1>
//             <div class="container">
//   <div className="row">
//     <div className="col-sm">
//     <div className="card">
//   <img className="card-img-top" src="https://picsum.photos/200/300" alt="Card image cap" height="200px"/>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

//     </div>
//     <div className="col-sm">
//     <div className="card" >
//   <img className="card-img-top" src="https://picsum.photos/201/300" alt="Card image cap" height='200px'/>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

//     </div>
//     <div className="col-sm">
//     <div className="card" >
//   <img className="card-img-top" src="https://picsum.photos/202/300" alt="Card image cap" height="200px"/>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

//     </div>
//   </div>
// </div>
//         </>
//     )
// }
// export default App;

// import React, { createContext } from "react";

// import CompA from "./CompA";

// const FirstName=createContext();
// const LastName =createContext();

// const App=()=>{
//     return(
//         <>
//     <FirstName.Provider value ={"Pushkar"}>
//     <LastName.Provider value={"Choudhary"}>

//     <CompA/>
//     </LastName.Provider>
//     </FirstName.Provider>
//     </>
//     );
// };
// export default App;
// export { FirstName,LastName };

// import React,{useEffect, useState} from 'react';

// const App=()=>{
//     const [num,setNum]=useState(0);
//     const [nums,setNums]=useState(0);
    
//     const inputEvent=()=>{
//         setNum(num+1);
        
//     }
//     const inputEventtwo=()=>{
//         setNums(nums+1);
        
//     }

//     useEffect(()=>{
        
//         document.title=`You clicked me ${num} times`;
//     })
//     return(
//         <>
//             <button onClick={inputEvent}>Click Me {num}</button>
//             <button onClick={inputEventtwo}>Click Me {nums}</button>
//         </>
//     );
// };

// export default App;

import React from 'react';
import { Route,Routes,Navigate } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Service from './Service';
import Menu from './Menu';
import User from './User';
import Search from './Search';

const Name=()=>{
    return(
        <h1>this is name page of contact page</h1>
    )
};
function App(){
    
    return(
        <>
        <Menu/>
        <Routes>
        <Route exact path="/" element={<About name="About"/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
        <Route exact path='/search' element={<Search/>}></Route>
        <Route exact path='/service' element={<Service/>}></Route>
        <Route path='/contact/name' element={<Name/>}></Route>
        <Route path='/user/:fname/:lname' element={<User/>}></Route>
        {/* <Route path='*' element={<Error/>}></Route> */}
        <Route path='*' element={<Navigate to="/"/>} />
        </Routes>
        </>
    );
}
export default App;