import React , {useState} from "react"



const UserForm = (props) =>{
    const[firstname , SetFirstname] = useState ("");
    const[lastname , setLastname] = useState ("");
    const[email , setEmail] = useState ("")
    const[password , setPassowrd] = useState("");
    const [confirmpassword , setConfirmPassword] = useState ("");

    const crateUser = (e) => {
        e.preventDefault();
        const newUser = {firstname, lastname, email, password, confirmpassword};
    }





    return (
        <form>
            <div>
                <label> FirstName  </label>
                <input type="text"  name="firstname" onChange ={ (e) => SetFirstname(e.target.value)}  />
            </div>
            <div>
                <label>LastName </label>
                <input type = "text" name = "lastname" onChange = { e  => setLastname(e.target.value)}/>
            </div>
            <div> 
                <label> Email </label>
                <input type ="email"  name = "email" onChange = { e => setEmail (e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type = "password" name = "password" onChange = {e => setPassowrd(e.target.value) }/>
            </div>
            <div>
                <label>Confirm password</label>
                <input type = "password" name= "confirmpassword" onChange = { e => setConfirmPassword(e.target.value)}/>
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