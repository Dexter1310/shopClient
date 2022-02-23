import './App.css';
import Home from './Home';
import React from 'react';
import { Users } from "./Users";
import { UserForm } from './components/UserForm';
import Navigation from './components/Navigation';
import { Route, Switch } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const API_BASE_URL = 'http://localhost:8000';


function App() {



  return (

    <div className="App">
      <div className='content'>

        <Router>
          <Navigation />
          <Users />

          <Switch>
            <Route path='/contacto' component={UserForm}>
            
            </Route>

          </Switch>

        </Router>
      </div>
    </div>
  );
}

export default App;
