import React, { useState , useEffect } from 'react'
import axios from 'axios';


const Pokemon = (props) =>{

    const[pokemon , setPokemon] = useState('');


    // const pokemonFetch =()=>{
    //     console.log("first response")
    //     fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    //     .then(response =>{
    //         return response.json()
    //     })
    //     .then(response =>{
    //         setPokemon(response.results)
    //         console.log(response);
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })

    // }


    
    
    // const ClickHandler= ()=>{
        //     pokemonFetch();
        
        // }
        
        
        const pokemonAxios = ()=>{
            axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(response => {
                console.log(response);
            })
            .catch(err =>{
                console.log(err);
            },[])
        }
        
        useEffect(() =>{
            pokemonAxios();
        })
        


    return(

        <div>
            <div>
                {/* {
                    pokemon.length > 0 && pokemon.map((poke , index)=>{
                    return (<div key ={index}> Pokemon name:{poke.name}</div>)
                    }) 
                } */}
                
            </div>

        </div>

        
    );
}


export default Pokemon;