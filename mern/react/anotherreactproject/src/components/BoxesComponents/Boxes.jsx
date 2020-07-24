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


    const deleteHandler = (idx)=>{

        setBoxes(boxes.filter((box , i ) => i !== idx));

    };




    const colorChangeHandler =(color , idx) =>{
        const newBoxes = [...boxes];// needed to create a new copy 

        //newBoxes[idx].color = color another way to type it
        
        
        const selectedBox = Object.assign({}, newBoxes[idx]);// update data is mutable copy 
        const selectedstyle = Object.assign({}, newBoxes[idx].style)

        selectedstyle.background = color;
        selectedBox.color = color
        selectedBox.style = selectedstyle

        newBoxes[idx] = selectedBox
        setBoxes(newBoxes)
        
    }

    

    return (
        <div>
            <BoxForm boxes = {boxes} setBoxes= {setBoxes}/>
            <BoxDisplay boxes={boxes}  deleteHandler= {deleteHandler} colorChangeHandler= {colorChangeHandler}/>

        </div>


    )


}

export default Boxes ; 