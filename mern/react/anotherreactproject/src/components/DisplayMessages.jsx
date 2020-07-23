import React from 'react';
    
    
const MessageDisplay = (props) => {

    const {message} = props;



    return (
        <>
            <h1>Current Message</h1>
            <p>{ message }</p>
        </>
    );
};
    
export default MessageDisplay;
