import React, {useState} from 'react';


const BoxGenerator =({Colorbox , setColorBox}) =>{
    const [color , setColor ] = useState ('');
    const [height , setHight] = useState('');

    const colorhandler =(e)=>{
        setColor(e.target.value); 
    }

    const heighthandler =(e)=> {
        setHight(e.target.value);
    }


    const formhandler =(e)=>{
        e.preventDefault();
        setColorBox([...Colorbox,{
            color: color,
            height : height,
            style: {
                display: 'inline-block',
                background: color,
                height:  "100px",
                margin: "10px",
                width: "100px"

            }
        }]);
        console.log(color);
        console.log(height);
        console.log(Colorbox);
    }
    return(
        <div>
            <form onSubmit={formhandler}>
                <input type="text" value = {color}  onChange={colorhandler} />
                <input type="hidden" value = {height}  onChange={heighthandler} />
                <button>Add Box color</button>
            </form>
            
        </div>
    )
}


export default BoxGenerator;