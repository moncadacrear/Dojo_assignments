import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Groceries from './components/Practice';
import DisplayMessages from'./components/DisplayMessages';
import MessageForm from './components/MessageForm';
import Boxes from './components/BoxesComponents/Boxes';
import BoxesDisplay from './components/BoxesComponents/BoxesDisplay';
import BoxForm from './components/BoxesComponents/BoxForm';

import Todolist from './components/todolist/ToDolist';
import DisplayToDolist from './components/todolist/DisplayToDolist';







function App() {
  // const [currentMsg, setCurrentMsg] = useState("There are no messages")

  // const Gotmail = (newMessage) =>{
  //   setCurrentMsg(newMessage);
  // }

  const [list, setList ] = useState([])

  


  return (
    <div className="App">

      {/* <Boxes/> */}


      {list.map(( task, idx) =>(
        <DisplayToDolist list={list} task = {task} setList={setList}  idx = {idx}/>
      ))}
      <Todolist list={list} setList={setList}/>



    </div>
  );
}

export default App;
