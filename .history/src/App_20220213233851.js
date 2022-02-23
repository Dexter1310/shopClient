import './App.css';
import Home from './Home';
import React from 'react';
import { Users } from "./Users";
import { UserForm } from './components/UserForm';
import Navigation from './components/Navigation';

import {
  Switch,
  Route,
} from "react-router-dom";


const API_BASE_URL = 'http://localhost:8000';


function App() {



  return (

    <div className="App">
      <div className='content'>
        <Navigation />
        <Users />
     <div className='columns'>
      
            <Route  path="/">
              <UserForm />
            </Route>
          </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;
