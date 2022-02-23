import './App.css';
// import Home from './Home';
import React from 'react';
import { Users } from "./Users";
import { UserForm } from './components/UserForm';
import Navigation from './components/Navigation';
import { useParams } from 'react-router-dom';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const API_BASE_URL = 'http://localhost:8000';


function App() {

  const [post, setPost] = React.useState(null);
  const { postSlug } = useParams();
  return (
 

    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Users />}>
        </Route>
        <Route path="/created/:id" element={<UserForm  idu={$postSlug} />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
