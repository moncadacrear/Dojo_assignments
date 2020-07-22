import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Groceries from './components/Practice';
import DisplayMessages from'./components/DisplayMessages';
import MessageForm from './components/MessageForm';
import Boxes from './components/BoxesComponents/Boxes'
import BoxesDisplay from './components/BoxesComponents/BoxesDisplay'
import BoxForm from './components/BoxesComponents/BoxForm'






function App() {
  // const [currentMsg, setCurrentMsg] = useState("There are no messages")

  // const Gotmail = (newMessage) =>{
  //   setCurrentMsg(newMessage);
  // }


  return (
    <div className="App">

      <Boxes/>



    </div>
  );
}

export default App;
