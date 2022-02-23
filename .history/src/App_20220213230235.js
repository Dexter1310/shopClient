import './App.css';
import Home from './Home';
import React from 'react';
import { Users } from "./Users";
import { UserForm } from './components/UserForm';
import Navigation from './components/Navigation';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";




const API_BASE_URL= 'http://localhost:8000';


function App() {

  
  
  return (
   
    <div className="App">
      <div className='content'>
      <Navigation/>
        <Users />
        <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/about" component={About} />
  <Route exact path="/users" render={() => <Users name='John Serrano' />} />
  <Route component={PageNotFound} />
</Switch>
     
      </div>
    </div>
  );
}

export default App;
