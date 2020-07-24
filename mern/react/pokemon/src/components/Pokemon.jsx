import React, {useEffect, useState} from 'react'
import axios from 'axios'



const Pokemon = ({valuepokemon})=>{


    const [pokemon, setPokemon] = useState ({
        name : "",
        sprites:{
            front:''
        }

    });

    const getPokemon = (url) =>{
        axios.get(url)
        .then((response) =>{
            console.log(response);
            setPokemon(response.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    useEffect(()=>{
        getPokemon(valuepokemon.url)
    },[])





    return (

        <div>
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites.front_default}></img>

        </div>


    )
}

export default Pokemon;