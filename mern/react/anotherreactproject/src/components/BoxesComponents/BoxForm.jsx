import React, { useState } from 'react'
import Boxes from './Boxes';



const BoxForm = (props) =>{
    const {boxes , setBoxes} = props;
    const [color, setColor] = useState("")
    const [height, setHeight] = useState("")


    const colorHanlder = (e) =>{
        setColor(e.target.value);
    }

    //the value comes from the user from input value = {color}

    const heightHandler = e =>{
        setHeight(e.target.value)
    }



    const formHanlder = e =>{
        e.preventDefault();

        setBoxes([...boxes,{
            "color": color,
            "height":"100",
            "style":{
                "background": color,
                "height": "100px",
                "display":"inline-block",
                "width": "100px",
                "margin":"2px"
            }
    
    
    
    
    
    }])

        setColor('')
        setHeight('')
    }



    



    return(
        <div>
            <form onSubmit ={formHanlder}>                    
                <input type = "text" value = {color} onChange= {colorHanlder}></input>
                {/* <input type = "hidden"  value ={height}   onChange ={heightHandler}></input>  */}
                <input type="submit" value ="click me "/>
            </form>
        </div>

    )
}

export default BoxForm;