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
        <Route path="/" element={<Users />}>
        </Route>
        {/* <Route path="/created/:id" element={<UserForm />}> */}


     
        <Route path="/created/:id" exact render={({ match }) => {
           return <UserForm miParamUrl={match.params.itemId} />     
     }}/>


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
