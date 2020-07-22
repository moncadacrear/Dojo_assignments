import React from 'react';



const Groceries = (props)=>{


    const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];


    return(
        <div>
            <ul>
                
                {groceryList.map((item, idx) =>
                <li key={idx}> {item} </li>)}
                
            </ul>
                
                

            
        </div>
    )
}


export default Groceries;