import React from "react";


const DisplayToDolist = ({list ,idx,task, setList }) =>{


    const onClick  = (() =>{
        setList(()=>{
            return list.filter (task => list.indexOf(task) !== idx)
        })
    })




    const onChange = ()=>{
        list[idx].isComplete = !list[idx].isComplete;
    setList([...list])
    }







    return(

        <div>
            <h4>task:{task.name} </h4>
            <div>
                <label htmlFor ="checkbox" >complete</label>
                <input type= "checkbox" onChange={onChange} checked ={task.isComplete}/>
                <input type = "submit" onClick={onClick}></input>
            </div>
            
        </div>


    )
};


export default DisplayToDolist;