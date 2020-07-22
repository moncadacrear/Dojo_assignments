import React, { useState } from 'react';
import BoxDisplay from './BoxesDisplay';
import BoxForm from './BoxForm';


const Boxes = (props)  =>{

    const [boxes , setBoxes] = useState([
        {
            
                "color": "red",
                "height": "100",
                "style":{
                    "background": "red",
                    "height": "100px",
                    "display":"inline-block",
                    "width": "100px",
                    "margin":"2px",
                }
        }
    ])

    

    return (
        <div>

            <h1>hello</h1>
            <BoxForm boxes = {boxes} setBoxes= {setBoxes}/>
            <BoxDisplay boxes={boxes}/>

        </div>


    )


}

export default Boxes ; 