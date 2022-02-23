import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import React from 'react';

class Other extends React.Component {
 

  render() {
      return (
          <div>hola que tal </div>

      )
  }


}
function App() {

  return (
    <div className="App">
      <div className='content'>
        <Navbar />
        <Home />
        <Other />
      </div>
    </div>
  );
}

export default App;
