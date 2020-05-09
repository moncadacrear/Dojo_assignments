import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Boxgenerator from './components/boxgenerator'
import BoxDisplay from './components/boxdisplay'

function App() {
  const [Colorbox,setColorBox] = useState([{color:'' , height:'', style:{
    display: 'inlince-block',
    background: "color",
    height: "100px",
  }}]);
  return (
    <div className="App">
      <h1>Box Generator </h1>
      <Boxgenerator Colorbox ={Colorbox} setColorBox ={setColorBox}/>                       
      <BoxDisplay ColorBox={Colorbox}/>                 
    </div>
  );
}

export default App;
