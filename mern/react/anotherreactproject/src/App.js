import React, { useState , useEffect} from 'react';
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
import Pokemon from './components/PokemonApi/DisplayPokemon'
import axios from 'axios'








function App() {
  // const [currentMsg, setCurrentMsg] = useState("There are no messages")

  // const Gotmail = (newMessage) =>{
  //   setCurrentMsg(newMessage);
  // }

  // const [list, setList ] = useState([])


  const[pokemon,setPokemon] = useState()



  



  useEffect = ()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon/")
    .then(response => {
        console.log(response);
        console.log(response.data.results)
    })
    .catch(err =>{
        console.log(err);
    })
}


  


  return (
    <div className="App">


      {/* <Boxes/> */}


      {/* {list.map(( task, idx) =>(
        <DisplayToDolist list={list} task = {task} setList={setList}  idx = {idx}/>
      ))}
      <Todolist list={list} setList={setList}/> */}



    </div>
  );
}

export default App;
