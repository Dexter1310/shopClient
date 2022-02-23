import './App.css';
import Home from './Home';
import React from 'react';
import { Users } from "./Users";
import { UserForm } from './components/UserForm';

import Navigation from './components/Navigation';

const API_BASE_URL= 'http://localhost:8000';

function App() {
  handleInput(e){
    console.log(e.target.value);
}
  
  
  return (
   
    <div className="App">
      <div className='content'>
      <Navigation/>
        <Users />
        <UserForm />
      </div>
    </div>
  );
}

export default App;
