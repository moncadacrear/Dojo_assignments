import React from 'react'


const Results = (props)=>{
    const{firstName,lastName,Email,password,confirmPassword} = props.data;

    return(
        <div>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Email: {Email}</p>
            <p>Password: {password}</p>
            <p>ConfirmPassword: {confirmPassword}</p>
        </div>
    );
};


export default Results;