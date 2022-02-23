import './App.css';
// import Home from './Home';
import React from 'react';
import { Users } from "./Users";
import { UserForm } from './components/UserForm';
import Navigation from './components/Navigation';
import EditUser from './components/EditUser';



import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';

const API_BASE_URL = 'http://localhost:8000';


function App() {


  return (

    <div>
      <Login></Login>
      <BrowserRouter>
        <Navigation />
        <Routes>
          
          <Route exact path="/" element={<Users />}>
          </Route>
          <Route exact path="/created" element={<UserForm />}>
          </Route>
          <Route exact path="/created/:id" element={<EditUser />}>
          </Route>

          <Route extact path="/login" element={<Login />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
