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

    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/">
        hola que tal
        </Route>
        <Route path="/about">
         segunda vista
        </Route>
        <Route path="/dashboard">
       otra vista
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
