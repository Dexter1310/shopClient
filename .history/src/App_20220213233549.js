import './App.css';
import Home from './Home';
import React from 'react';
import { Users } from "./Users";
import { UserForm } from './components/UserForm';
import Navigation from './components/Navigation';

import {
  S,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";


const API_BASE_URL = 'http://localhost:8000';


function App() {



  return (

    <div className="App">
      <div className='content'>
        <Navigation />
        <Users />


        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<UserForm />} >
              <UserForm />
            </Route>
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
