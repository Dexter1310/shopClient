import './App.css';
import Home from './Home';
import React from 'react';
import { Users } from "./Users";
import { UserForm } from './components/UserForm';
import Navigation from './components/Navigation';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

const API_BASE_URL = 'http://localhost:8000';


function App() {



  return (

    <div className="App">
      <div className='content'>
   
        <Router>
        <Navigation />
        <Users />

        <Switch>
<Route path=''>
  Contenido dinamico
</Route>

        </Switch>

        </Router>
      </div>
    </div>
  );
}

export default App;