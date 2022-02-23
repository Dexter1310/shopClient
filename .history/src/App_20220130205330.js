import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import React from 'react';

co

function getUsers() {
  axios.get(`http://localhost:8000/api/users`).then(users => {
      this.setState({ users: users.data, loading: false})
  })
}

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
