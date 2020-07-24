import React from 'react';
import Box from './box'


const BoxDisplay = ({boxes, deleteHandler , colorChangeHandler}) =>{


    



    return(
        <div>
        { boxes.map((box, idx) =>
            <div key ={idx}>
                <div>
                    <Box box={box} idx ={idx} 
                        deleteHandler={deleteHandler}  
                        colorChangeHandler={colorChangeHandler}
                    />
                </div>
            </div>
        )}
        </div>
    )
};


export default BoxDisplay;