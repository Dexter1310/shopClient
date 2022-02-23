import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import React from 'react';

const API_BASE_URL= 'http://localhost:8000';

function App() {

  return (
    <div className="App">
      <div className='content'>
        <Navbar />
        <Home />
    
      </div>
    </div>
  );
}

export default App;
