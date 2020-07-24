import React from 'react'
import Pokemon from './Pokemon'

const DisplayPokemon = ({pokemon})=>{





    return(
        <div>
            <ul>
                
                {
                    pokemon.map((value, index) =>
                    <Pokemon key={index}  valuepokemon={value}/>
                    )
                }
                
            </ul>

        </div>

    )
};

export default DisplayPokemon;