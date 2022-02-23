import './App.css';
// import Home from './Home';

import { Users } from "./Users";
import { UserForm } from './components/UserForm';
import Navigation from './components/Navigation';
import EditUser from './components/EditUser';
import DeleteUser from './components/DeleteUser';
import React, { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';

const API_BASE_URL = 'http://localhost:8000';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador:0,
    }
  }
  rend
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation contador={this.state.contador}/>
          <Routes>
            <Route exact path="/" element={<Users  onUpdate={latestData => {
            this.setState({toggleState: latestData.contador});
          }}/>}>
            </Route>
            <Route exact path="/created" element={<UserForm />}>
            </Route>
            <Route exact path="/created/:id" element={<EditUser />}>
            </Route>
            <Route exact path="/delete/:id" element={<DeleteUser />}>
            </Route>
            <Route exact path="/login" element={<Login />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }


}

export default App;