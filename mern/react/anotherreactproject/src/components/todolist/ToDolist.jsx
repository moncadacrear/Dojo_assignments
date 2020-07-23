import React from "react"


const ToDolist = ({list , setList}) => {


    let task = {
        name:"",
        isComplete:false
    };

    const onChange = e =>{
        task.name = e.target.value
    };

    const onClick = e =>{

        setList([...list , task ])
        e.target.value = "";
        task ="";


    }












    return(

        <div>
                <input type= "text" name = "task" onChange ={onChange}></input>
                <input type= "submit" value = "add to list "  onClick ={onClick}></input>


        </div>




    )







}


export default ToDolist;