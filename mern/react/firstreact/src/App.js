import React from 'react';
import './App.css';
import ToDolist from "./components/ToDolist"
import Header from "./components/Header"
import PersonCard from "./components/PersonCard"
import MyNewComponent from "./components/MyNewComponent"
import NewPersonCard from "./components/NewPersonCard"
import UserForm from "./components/UserForm"

function App() {
  return (
    <div className="App">
      <UserForm>
        
      </UserForm>






      {/* <NewPersonCard firstname = "Jane" lastname = "Doe"  age = {45} haircolor = "black"/>
      <NewPersonCard firstname = "John" lastname = "Smith"  age = {88} haircolor = "brown"/>
      <NewPersonCard firstname = "Millard" lastname = "Fillmore"  age = {50} haircolor = "brown"/>
      <NewPersonCard firstname = "Maria" lastname = "Smith"  age = {62} haircolor = "brown"/> */}




      {/* <Header firstname = {"alex"} lastname = {"solis"}/>
      <PersonCard firstName = {"Jane"} lastName ={"Doe"} Age = {45} HairColor ={"black"}/>

      <PersonCard firstName = {"John"} lastName ={"Smith"} Age = {88} HairColor ={"Brown"}/>

      <PersonCard firstName = {"Millard"} lastName ={"Fillmore"} Age = {50} HairColor ={"Brown"}/>

      <PersonCard firstName = {"Maria"} lastName ={"Smith"} Age = {62} HairColor ={"Brown"}/> */}


        {/* { we also have some text between the JSX tags . all components between these two card called "children". we camn access them via the following} */}
      {/* {<MyNewComponent header ={"header prop"}>

        <p> this is a child </p>
        <p> this is another child </p>
        <p> this is even another child </p>
        <p> and this one </p>

      </MyNewComponent>}  */}




    </div>
  );
}

export default App;
