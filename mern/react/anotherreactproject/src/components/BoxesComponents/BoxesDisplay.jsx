import React from 'react';



const BoxDisplay = ({boxes}) =>{


    



    return(
        <div>
        { boxes.map((box, idx) =>
            <div key ={idx} style ={box.style}>
                <p>color: {box.color}</p>
                {/* <p> hieght: {box.height}</p> */}
            </div>
        )}
        </div>
    )
};


export default BoxDisplay;