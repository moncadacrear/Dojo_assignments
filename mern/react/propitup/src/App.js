import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Mycomponent from './components/Mycomponent';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
        <PersonCard firstName ={'Jane'} lastName={'Doe'} age={'45'} hairColor= {'black'}/>
        <PersonCard firstName ={'John'} lastName={'Smith'} age={'88'} hairColor= {'Brown'}/> 
        <PersonCard firstName ={' Maria'} lastName={'Smith'} age={'62'} hairColor= {'Brown'}/> 
    </div>
  );
}

export default App;
