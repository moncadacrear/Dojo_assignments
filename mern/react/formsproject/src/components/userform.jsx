import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const {inputs, setInputs} = props;
    const [firstnameError, setFirstnameError] =useState('');
    const [lastnameError , setlastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [inputpassword , setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmpasswordError , setConfirmPasswordError] = useState('');

    // const handleTitle = (e) => {
    //     setInputs(e.target.value);
    //     if(e.target.value.length < 2) {
    //         setTitleError("Title is required!");
    //     } else if(e.target.value.length < 3) {
        //         setTitleError("Title must be 3 characters or longer!");
        //     }
        // }
        
        const makechange = e =>{
        setInputs({
            ...setInputs,[e.target.name]: e.target.value
        });
    };
        
    const firstnamemassageVali = (e) => {
        setInputs (e.target.value);
        if(e.target.value.length < 3) {
            setFirstnameError('First name must be at least 2 characters');
        } else if(e.target.value.length < 3) {
            setFirstnameError("Right amount of characters now")
        }
    }
    const lastNamemassageVali = (e) => {
        setInputs(e.target.value);
        if(e.target.value.length < 2) {
            setlastNameError('Last name must be at least 2 characters');
        } else if(e.target.value.length < 5) {
            setlastNameError("right amount of characters ");
        }
    }
    
    const EmailVali = (e) => {
        setInputs(e.target.value);
        if(e.target.value.length < 2) {
            setEmailError('email must be at least 2 Characters');
        } else if(e.target.value.length <8) {
            setEmailError("Now its higher then 8 characters");
        }
    }
    
    const PasswordVali = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            console.log(e.target.value)
            setPasswordError('Password must be at least 8 characters');
        } else if(e.target.value.length > 0) {
            setPasswordError("Now thats a long password");
        }
    }

    const confimPasswordVali = (e) => {
        setInputs(e.target.value);
        if(e.target.value == inputpassword) {
            console.log(`hello my value ${e.target.value} and ${inputpassword}`)
            setConfirmPasswordError('its a match');
        } else if(e.target.value != inputpassword) {
            // console.log(e.target)
            setConfirmPasswordError('it not a match');
        }
    }



    




    return(
        <form>
            <div>     
                <label htmlFor ="firstName">First Name</label>
                <input onChange= {firstnamemassageVali | makechange} type ="text" name='firstName'/>
                {firstnameError ?<p style={{color:'red'}}>{firstnameError }</p> :''}
            </div>


            <div>     
                <label htmlFor ="lastName">Last Name</label>
                <input onChange={lastNamemassageVali} type ="text" name='lastName'/>
                {lastnameError ?<p style={{color:'red'}}>{lastnameError }</p> :''}
            </div>


            <div>     
                <label htmlFor ="email">Email</label>
                <input onChange={EmailVali} type ="text" name='Email'/>
                {emailError ?<p style={{color:'red'}}>{emailError }</p> :''}
            </div>



            <div>     
                <label htmlFor ="password">Password</label>
                <input onChange={PasswordVali} type ="password" name='password'/>
                {passwordError ?<p style={{color:'red'}}>{passwordError }</p> :''}
            </div>


            <div>     
                {confirmpasswordError ?<p style={{color:'red'}}>{confirmpasswordError }</p> :''}
                <label htmlFor ="confirmPassword">ConfirmPassword</label>
                <input onChange={confimPasswordVali} type ="password" name="confimPassword"/>
            </div>
            
        </form>
    );
};
    
export default UserForm;