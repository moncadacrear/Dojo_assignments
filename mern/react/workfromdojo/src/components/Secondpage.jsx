import React from 'react';
import { Link } from '@reach/router';


const Secondpage = (props)=>{






    return(
        <div>
            <p>this is word: hello</p>
            <Link to ="/hello/thirdpage">go to the third page</Link>
            <p><Link to= "/homepage"> go back </Link></p>

        </div>
    )
}

export default Secondpage;