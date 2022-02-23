import './App.css';
// import Home from './Home';
import React from 'react';
import { Users } from "./Users";
import { UserForm } from './components/UserForm';
import Navigation from './components/Navigation';



import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const API_BASE_URL = 'http://localhost:8000';


function App() {


  return (
 

    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Users />}>
        </Route>
        <Route exact path="/created/:id" element={<UserForm />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
