import React from "react"

const NewForm = (props) => {
    const{inputs, setInputs} = props;



    const ChangeHanlder = e =>{
        setInputs({
            ...inputs,[e.target.name]: e.target.value
        });
    };


    return(
        <form>
            <div>
                <label>First name </label>
                <input type="text" name="firstname" onChange={ChangeHanlder}/>
            </div>
            <div>
                <label>Last name  </label>
                <input type="text" name="lastname" onChange={ChangeHanlder}/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email" onChange={ChangeHanlder}/>
            </div>
            <div>
                <label>Passowrd</label>
                <input type="passowrd" name="password" onChange={ChangeHanlder}/>
            </div>
            <div>
                <label>confirmpassword</label>
                <input type="password" name="confirmpassword" onChange={ChangeHanlder}/>
            </div>
        </form>

    )
}

export default NewForm;