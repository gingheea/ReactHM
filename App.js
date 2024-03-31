import React, { useState } from "react";
import './App.css';
 function Button(props)
 {
const handlerClick = () =>
 { 
  props.onClickAct(props.bkColor);
  props.onClickAct2(props.color);
 };  
return (
<button className="Button" onClick={handlerClick} style={{ backgroundColor: props.bkColor ,color:props.color}}>
{props.text} 
</button>
);
}
function DisplayBlock(props) 
{
return (
<div  class="DisplayBlock" style={{ backgroundColor: props.bkColor,color: props.color}}> Some text </div>
);
}
function App() {
 const [displayBkColor, setDisplayBkColor] = useState("white");
 const [displayColor, setDisplayColor] = useState("black");
const stateFunc = (newBkColor) => { setDisplayBkColor(newBkColor); }; 
const stateFunc2 = (newColor) => { setDisplayColor(newColor); };  
return (
<>
<Button bkColor="red" color="green" text="Red" onClickAct={stateFunc} onClickAct2={stateFunc2}/>
<Button bkColor="green" color="red" text="Green" onClickAct={stateFunc} onClickAct2={stateFunc2}/>
<Button bkColor="yellow" color="pink" text="Pink" onClickAct={stateFunc} onClickAct2={stateFunc2}/>
<DisplayBlock bkColor={displayBkColor} color={displayColor}/>
</>
);
}

export default App;
