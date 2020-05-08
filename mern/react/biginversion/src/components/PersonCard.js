import React, {useState, Component} from 'react';
const PersonCard = props => {
    const[clickCount ,setCount ] = useState(0);

    const handleClick =()=>{
        setCount(clickCount + 1 );
    }
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { clickCount+ props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
            {console.log(clickCount)}
            
            <button onClick={handleClick }> Happy birthday button {props.firstName} {props.lastName}</button>
            
        </div>
    );

}
export default PersonCard;
