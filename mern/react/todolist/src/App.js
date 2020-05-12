import React, { useState } from 'react';
import TodoList from './components/Todolist'
import './App.css';
import DisplayTask from './components/DisplayTask'

function App() {
  const[list, setList]=useState([]);
  return (
    <div>
      {list.map((task, i)   =>(
      <DisplayTask task ={task} setList={setList} index = {i} list ={list}/>
      ))}            
      <TodoList list ={list} setList = {setList}> </TodoList>
    </div>
  );
}

export default App;
