import './App.css';
import Home from './Home';
import React from 'react';
import { Users } from "./Users";
import { UserForm } from './components/UserForm';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const API_BASE_URL= 'http://localhost:8000';


function App() {

  
  
  return (
   
    <div className="App">
      <div className='content'>
      <Navigation/>
        <Users />
        <BrowserRouter>
        <div id="container">
          <div>
            <Link to="/">Landing Page</Link>
            <Link to="/editproject">Edit Project</Link>
          </div>
          <Switch>
            <Route path="/editproject" />
            <Route exact path="/" component={Landing} />
          </Switch>
        </div>
      </BrowserRouter>
     
      </div>
    </div>
  );
}

export default App;
