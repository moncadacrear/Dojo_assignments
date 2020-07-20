import React , {useState} from "react"



const UserForm = (props) =>{
    const[firstname , SetFirstname] = useState ("");
    const[firstnameerror, setFirstnameErrorr] = useState ("");

    const[lastname , setLastname] = useState ('');
    const[lastnameerror, setLastnameError]= useState('');

    const[email , setEmail] = useState ("")
    const[emailerror, setEmailError] = useState("");

    const[password , setPassowrd] = useState("");
    const[passworderror,setPasswordError] = useState("")

    const[confirmpassword , setConfirmPassword] = useState ("");
    const[confirmpassworderror, setConfirmPasswordError] = useState  ("")

    const crateUser = (e) => {
        e.preventDefault();
        const newUser = {firstname, lastname, email, password, confirmpassword};
    }


    const firstnameVal = (e) =>{
        SetFirstname(e.target.value);
        if(e.target.value.length < 2){
            setFirstnameErrorr("first name must be longer then 2 characters ")
        }else if (e.target.value.length  > 3 ){
            setFirstnameErrorr("")
        }
    }

    const lastnameVal = (e) =>{
        setLastname(e.target.value);
        if(e.target.value.length < 2 ){
            setLastnameError("Last name must be longer then 2 characters")
        }else if (e.target.value.length > 3){
            setLastnameError("")
        }
    }

    const emailVal = e => {
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setEmailError("email must be longer then 5 characters")
        }else if (e.target.value.length > 5 ){
            setEmailError("its finally longer then 5 characters")
        }
    }

    const passwordVal = e =>{
        setPassowrd(e.target.value);
        if(e.target.value.length < 8 ){
            setPasswordError("it must be longer 8 ")
        }else if (e.target.value.length >= 8 ){
            setPasswordError("")
        }
    }

    const confirmPasswordVal= e =>{
        setConfirmPassword(e.target.value);
        if(e.target.value === password ){
            setConfirmPasswordError("the password is a  match with your origin")
        }else if (e.target.value != password){
            setConfirmPasswordError('its not a match !!!!!!!!!!!!!!!!!!')
        }
    }





    return (
        <form>
            <div>
                <label> FirstName  </label>
                <input type="text"  name="firstname" onChange ={firstnameVal}  />
                {firstnameerror?<p style ={{color:'red'}}>{firstnameerror}</p> : ''}
            </div>
            <div>
                <label>LastName </label>
                <input type = "text" name = "lastname" onChange ={lastnameVal}/>
                {lastnameerror? <p style = {{color:'green'}}>{lastnameerror}</p> : ''}
            </div>
            <div> 
                <label> Email </label>
                <input type ="email"  name = "email" onChange = {emailVal} />
                {emailerror? <p style ={{color : "blue"}}>{emailerror} </p> : ''}
            </div>
            <div>
                <label>Password</label>
                <input type = "password" name = "password" onChange = {passwordVal}/>
                {passworderror? <p style = {{color : "yellow"}}>{passworderror}</p> : ''}
            </div>
            <div>
                <label>Confirm password</label>
                <input type = "password" name= "confirmpassword" onChange = {confirmPasswordVal}/>
                {confirmpassworderror? <p style={{color : "purple"}}>{confirmpassworderror}</p> : ''}
            </div>



            <h4> First Name : {firstname}</h4>
            <h4> LastName:{ lastname}</h4>
            <h4> Email:{email}</h4>
            <h4> Password : {password}</h4>
            <h4> ConfirmPassword: {confirmpassword}</h4>
        </form>

    )
}

export default UserForm ; 