import React from 'react'


const NewPersonCard = props =>{



    return(
        <div>
            <h1>{props.lastname} ,{props.firstname}</h1>
            <p>Age :{ props.age}</p>
            <p>Hair color: {props.haircolor}</p>
        </div>
    )
    
}

export default NewPersonCard ;