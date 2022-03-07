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
import { LoginButton } from './components/LoginButton';
import { Profile } from './components/Profile';




const API_BASE_URL = 'http://localhost:8000';

class App extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      // btnNav: <Link style={{ color: 'white' }} to="/login">Login</Link>,
      btnNav: <LoginButton />,
      profile:<Profile/>

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
        <BrowserRouter>
          <Navigation contador={this.state.contador} btnNav={this.state.btnNav}  profile={this.state.profile} auth0={this.props.auth0} />
          <Routes>
            <Route exact path="/" element={<Users parentCallback={this.callbackFunction} />}>
            </Route>
            <Route exact path="/created" element={<UserForm />}>
            </Route>
            <Route exact path="/created/:id" element={<EditUser />}>
            </Route>
            <Route exact path="/delete/:id" element={<DeleteUser />}>
            </Route>
            {/* <Route exact path="/login" element={<Login getBtnNav={this.btnNavAction} />}>
            </Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }


}

export default App;
