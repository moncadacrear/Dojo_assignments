import React from "react"
import { useState } from "react";

const NewForm = (props) => {
    const{inputs, setInputs} = props;
    const[firstnameerror , setFirstNameError] = useState ('');
    const[lastnameerror , setLastNameError] = useState('');
    const[emailerror , setEmailError] = useState('');
    const[passworderror, setPasswordError] = useState('');
    const[password , setPassword] = useState('')
    const[confirmpasswrderror, setConfirmpasswordError] = useState('');



    const ChangeHanlder = e =>{
        setInputs({
            ...inputs,[e.target.name]: e.target.value
        });
    };

    const firstnameVal = (e) =>{
        setInputs({...inputs,[e.target.name]: e.target.value});
        if(e.target.value.length < 2){
            setFirstNameError("first name must have more then 2 character")
        }else if(e.target.value.length > 2){
            setFirstNameError("now its more then 2 character im pround of you")
        }
    }


    const lastnameVal = e => {
        setInputs({...inputs,[e.target.name]: e.target.value});
        if(e.target.value.length < 2){
            setLastNameError("last name must have more then 2 character ")
        }else if (e.target.value.length > 2){
            setLastNameError("")
        }
    }

    const emailVal = e => {
        setInputs({...inputs,[e.target.name]: e.target.value});
        if(e.target.value.length < 2){
            setEmailError("email must be longer then 5 characters")
        }else if (e.target.value.length > 2){
            setEmailError("")
        }
    }


    const passwordVal = e => {
        setInputs({...inputs,[e.target.name]: e.target.value});
        // setPassword(e.target.value)
        if(e.target.value.length < 8){
            setPasswordError("password must be longer then 8 characters")
        }else if (e.target.value.length > 2){
            setPasswordError("")
        }
    }



    const confirmpasswrdVal = e => {
        setInputs({...inputs,[e.target.name]: e.target.value});
        if(e.target.value === inputs.password){
            setConfirmpasswordError("its a match")
        }else if (e.target.value !== inputs.password){
            setConfirmpasswordError("password does not match")
        }
    }


    return(
        <form>
            <div>
                <label>First name </label>
                <input type="text" name="firstname" onChange={firstnameVal}/>
                {firstnameerror?<p style={{color:'red'}}>{firstnameerror}</p> :''}
            </div>
            <div>
                <label>Last name  </label>
                <input type="text" name="lastname" onChange={lastnameVal}/>
                {lastnameerror?<p style={{color:'blue'}}>{lastnameerror}</p> :''}
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email" onChange={emailVal}/>
                {emailerror?<p style={{color:'yellow'}}>{emailerror}</p> :''}
            </div>
            <div>
                <label>Passowrd</label>
                <input type="passowrd" name="password" onChange={passwordVal}/>
                {passworderror?<p style={{color:'green'}}>{passworderror}</p> :''}
            </div>
            <div>
                {confirmpasswrderror?<p style={{color:'purple'}}>{confirmpasswrderror}</p> :''}
                <label>confirmpassword</label>
                <input type="password" name="confirmpassword" onChange={confirmpasswrdVal}/>
            </div>
        </form>

    )
}

export default NewForm;