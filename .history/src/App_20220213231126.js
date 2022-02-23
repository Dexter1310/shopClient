import './App.css';
import Home from './Home';
import React from 'react';
import { Users } from "./Users";
import { UserForm } from './components/UserForm';
import 

const API_BASE_URL= 'http://localhost:8000';


function App() {

  
  
  return (
   
    <div className="App">
      <div className='content'>
      <Navigation/>
        <Users />
 
     
      </div>
    </div>
  );
}

export default App;
