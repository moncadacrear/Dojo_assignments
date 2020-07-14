import React from 'react';
import './App.css';
import ToDolist from "./components/ToDolist"
import Header from "./components/Header"
import PersonCard from "./components/PersonCard"
import MyNewComponent from "./components/MyNewComponent"

function App() {
  return (
    <div className="App">

      {/* <Header firstname = {"alex"} lastname = {"solis"}/> */}
      <PersonCard firstName = {"Jane"} lastName ={"Doe"} Age = {45} HairColor ={"black"}/>

      <PersonCard firstName = {"John"} lastName ={"Smith"} Age = {88} HairColor ={"Brown"}/>

      <PersonCard firstName = {"Millard"} lastName ={"Fillmore"} Age = {50} HairColor ={"Brown"}/>

      <PersonCard firstName = {"Maria"} lastName ={"Smith"} Age = {62} HairColor ={"Brown"}/>


      {/* <MyNewComponent header ={"header prop"}>
        {/* we also have some text between the JSX tags . all components between these two card called "children". we camn access them via the following  */}
{/* 
        <p> this is a child </p>
        <p> this is another child </p>
        <p> this is even another child </p>

      </MyNewComponent> */} 




    </div>
  );
}

export default App;
