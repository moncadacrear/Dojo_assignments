import React from 'react';


const DisplayTask = props => {
    const {task,index,setList,list} = props;
    const onClick = ()=>{
        setList(()=>list.filter(task => list.indexOf(task) != index))};


    const onChange = () => {
        list[index].isComplete =! list[index].isComplete;
        setList([...list]);

    };

    return(
        <div className ="container bg-secondary">
            <h4>{task.name}</h4>
            <div>
                <label htmlFor= "checkbox" >checkbox</label>
                <input type="checkbox"  onChange={onChange} checked ={task.isComplete}/>
                <button onClick ={onClick} >Delete</button>
            </div>
        </div>
    );
}

export default DisplayTask;