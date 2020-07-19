import React , {useState}from 'react'


const NewPersonCard = props =>{
    const [state, setState] = useState({
        clickCount:0
    });


    const handleClick = () =>{
        setState({
            clickCount: state.clickCount +1
        })
    }



    return(
        <div>
            <h1>{props.lastname} ,{props.firstname}</h1>
            <p>Age :{ state.clickCount + props.age}</p>
            <p>Hair color: {props.haircolor}</p>
            <button onClick={handleClick}> add more years</button>
        </div>
    )
    
}

export default NewPersonCard ;