import React from 'react';


const TodoList=(props)=>{
    const{list, setList} = props;

    let task ={
        name:"",
        isComplete: false
    };


    const onChange = (e)=>{
        task.name= e.target.value;
    };


    const onClick =(e)=>{
        setList([...list,task]);
        e.target.value='';
        task = "";
    }

    return (          
    <div>
        <input  onChange = {onChange} type="text" name ="task"/>
        <button onClick = {onClick} >add list</button>
    </div>
    );
}


export default TodoList;