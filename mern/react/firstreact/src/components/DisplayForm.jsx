import React,{useState} from 'react'




const DisplayForm = (props) => {
    const {firstname, lastname , email, password, confirmpassword} = props.data





    return(
        <div>
            <p>First name:{firstname}</p>
            <p>Last name:{lastname}</p>
            <p> email : {email}</p>
            <p> password : {password}</p>
            <p> confirmpassword : {confirmpassword}</p>
        </div>


    );

}

export default DisplayForm;