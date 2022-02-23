import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import React from 'react';

import Navigation from './components/Navigation';

const API_BASE_URL= 'http://localhost:8000';

function App() {

  return (
    <div className="App">
      <div className='content'>
      <Navigation />
        <Home />


    
      </div>
    </div>
  );
}

export default App;
