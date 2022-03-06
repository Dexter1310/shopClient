import './App.css';
// import Home from './Home';

import { Users } from "./Users";
import { UserForm } from './components/UserForm';
import Navigation from './components/Navigation';
import EditUser from './components/EditUser';
import DeleteUser from './components/DeleteUser';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';
import { useAuth0 } from '@auth0/auth0-react';



const API_BASE_URL = 'http://localhost:8000';
const {loginWithRedirect}= useAuth0();


class App extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      btnNav: <Link style={{ color: 'white' }} to="/login">Login</Link>,

    }
  }
  callbackFunction = (childData) => {
    this.setState({ contador: childData })
  }

  btnNavAction = (childData) => {
    this.setState({ btnNav: childData })
  }

  render() {

    
    return (
      <div>
        {/* <button onClick={() => this.loginWithRedirect()}>login</button> */}
        <BrowserRouter>
          <Navigation contador={this.state.contador} btnNav={this.state.btnNav} />
          <Routes>
            
            <Route exact path="/" element={<Users parentCallback={this.callbackFunction} />}>
            </Route>
            <Route exact path="/created" element={<UserForm />}>
            </Route>
            <Route exact path="/created/:id" element={<EditUser />}>
            </Route>
            <Route exact path="/delete/:id" element={<DeleteUser />}>
            </Route>
            <Route exact path="/login" element={<Login getBtnNav={this.btnNavAction} />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }


}

export default App;
