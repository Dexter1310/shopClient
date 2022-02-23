import './App.css';
import Navbar from './Navbar';
import Home from './Home';


function App() {

  return (
    <div className="App">
      <div className='content'>
        <Navbar />
        <h1>{title}</h1>
        <h2>{person.name}</h2>
        <Home />
      </div>
    </div>
  );
}

export default App;
