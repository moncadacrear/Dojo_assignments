import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Groceries from './components/Practice';
import DisplayMessages from'./components/messages/DisplayMessages';
import MessageForm from './components/messages/MessageForm';
import Boxes from './components/BoxesComponents/Boxes';
import BoxesDisplay from './components/BoxesComponents/BoxesDisplay';
import BoxForm from './components/BoxesComponents/BoxForm';
import Todolist from './components/todolist/ToDolist';
import DisplayToDolist from './components/todolist/DisplayToDolist';
import Pokemon from './components/PokemonApi/Pokemon'








function App() {
  // const [currentMsg, setCurrentMsg] = useState("There are no messages")

  // const Gotmail = (newMessage) =>{
  //   setCurrentMsg(newMessage);
  // }

  const [list, setList ] = useState([])

  


  return (
    <div className="App">


      <Pokemon/>

      {/* <Boxes/> */}


      {/* {list.map(( task, idx) =>(
        <DisplayToDolist list={list} task = {task} setList={setList}  idx = {idx}/>
      ))}
      <Todolist list={list} setList={setList}/> */}



    </div>
  );
}

export default App;
