import React from 'react';
import { useState } from 'react';


const Todos = (props) =>{
    const [tasks,setTasks] = useState([]);
    const [todoTitle, setTodoTitle] = useState("");

    const handleSubmit = (event)=>{
        event.preventDefault();

        const newTask ={
            title: todoTitle,
            isDone: false
        };

        //sends setTasks a brand New Array that has all the exisitng task in it, plus one new task
        setTasks([...tasks, newTask])


        //clear input box
        setTodoTitle("")
    };

    const handleDelete =(event, delIdx)=>{
        const filteredTasks = tasks.filter((task, idx) =>{
            return idx == delIdx 
        });
        setTasks(filteredTasks);
        //shorthand 
        // setTasks(tasks.filter((task, idx) => idx == delIdx));
    };

    const toggleIsComplete =(idx)=>{
        const selectedTask = tasks[idx];
        selectedTask.isDone =! selectedTask.isDone;

        setTasks([...tasks]);
    };

    return(
        <div>
            <h2> your Tasks</h2>
            <form onSubmit ={(event)=>{ 
                handleSubmit(event)
            }};
            //handlesubmit will automatically  be passed event if writiten like this
            //onSubmit={handle}
            
            >
            </form>
            {tasks.map((task, idx) => {
                
            }

        </div>
    )
};

export default 