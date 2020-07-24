import React,{useEffect,useState} from 'react';
import axios from 'axios'
import './App.css';
import DisplayPokemon from './components/DisplayPokemon'

function App() {



  const[pokemon,setPokemon] = useState([])



  const getPokemon = ()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon/")
    .then(response => {
        console.log(response);
        setPokemon(response.data.results)
    })
    .catch(err =>{
        console.log(err);
    },[])


  }


  useEffect(()=> {
    getPokemon();
  })




  return (
    <div className="App">

      <DisplayPokemon pokemon={pokemon} />


    </div>
  );
}

export default App;
