import './App.css';
// import Home from './Home';
import React from 'react';
import { Users } from "./Users";
import { UserForm } from './components/UserForm';
import Navigation from './components/Navigation';
import EditUser from './components/EditUser';
import DeleteUser from './components/DeleteUser';





import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';

const API_BASE_URL = 'http://localhost:8000';


function App() {

  var count = 0;

  return (
    <div>
      <BrowserRouter>
        <Navigation  contador={count}/>
        <Routes>
          <Route exact path="/" element={<Users />}>
          </Route>
          <Route exact path="/created" element={<UserForm contador={/>}>
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

export default App;
