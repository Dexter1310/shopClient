import './App.css';
import Home from './Home';
import React from 'react';

import Navigation from './components/Navigation';

const API_BASE_URL= 'http://localhost:8000';

function App() {

  return (
    <div className="App">
      <div className='content'>
        {this.state.users.leng}
      <Navigation/>
        <Home />
    
      </div>
    </div>
  );
}

export default App;
