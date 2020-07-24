import React, { useState , useEffect } from 'react'


const Pokemon = (props) =>{

    const[pokemon , setPokemon] = useState('');


    useEffect(() =>{
        console.log("first response")
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response =>{
            return response.json()
        })
        .then(response =>{
            setPokemon(response.results)
            console.log(response);
        })
        .catch(err => {
            console.log(err)
        })
    })




    return(

        <div>
            <div>
                {
                    pokemon.length > 0 && pokemon.map((pokename , index)=>{
                    return (<div key ={index}> {pokename.name}</div>)
                    }) 
                }
                
            </div>

        </div>

        
    );
}


export default Pokemon;