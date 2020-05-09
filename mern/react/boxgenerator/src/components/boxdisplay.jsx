import React, {useState} from 'react';


const BoxDisplay =({ColorBox}) =>{
    return(
        <div>
            {ColorBox.map((val, i) =>
            <div key={i} style={val.style}> 
                <p> {val.color}</p>
                <p>{val.height}</p>
            </div>
            )}
        </div>
    )
}


export default BoxDisplay