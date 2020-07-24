import React from 'react';
import {Router} from '@reach/router';
import './App.css';
import Homepage from './components/Homepage'
import Secondpage from './components/Secondpage'
import Thirdpage from './components/Thirdpage'
import Anotherpage from './components/Anotherpage'

function App() {
  return (
    <div className="App">

      <Router>
        <Homepage path ='/homepage/' />
        <Anotherpage path ='/4/'/>
        <Secondpage path ='/hello/'/>
        <Thirdpage path ='hello/thirdpage/'/>

      </Router>

    </div>
  );
}

export default App;
