import React,{useEffect,useState} from 'react'




const Pokemon = (props)=>{
    const [pokemon, setPokemon] = useState([]);

    const fetchData = useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=706')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, [])

    onclick =()=>{
        
    }



    return(
        <div>
        {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            })}

            <button onclick={fetchData}>get all pokemon </button>
        </div>
        
        
    );
};



export default Pokemon;