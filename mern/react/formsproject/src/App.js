import React, { useState } from 'react';
import './App.css';
import UserForm from './components/userform';
import Results from './components/Results'




function App() {
  const[state,setState] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',

  });
  return (
    <div className="App">
      <UserForm inputs ={state}setInputs = {setState}/>
      <Results data ={state}></Results>
      
    </div>
  );
}

export default App;
