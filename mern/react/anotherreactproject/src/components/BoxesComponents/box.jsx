import React, {useState} from 'react'


const Box = ({box , idx, deleteHandler , colorChangeHandler}) =>{


    const [color, setColor] = useState ('')


    let submitHandler = e =>{
        e.preventDefault ();
        colorChangeHandler(color, idx)




    }



    






    return(
        <div style ={box.style}>
            <p>color:{box.color}</p>

            <button onClick ={e => {deleteHandler(idx)}}>delete</button>

            <form onSubmit = {submitHandler}>
                <input type ="text" value = {color} onChange={e => setColor(e.target.value)} ></input>
                <input type ="submit" value= "change color"></input>
            </form>


        </div>


    )
}


export default Box;