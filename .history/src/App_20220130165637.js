import './App.css';
import Navbar from './Navbar';
import Home from './Home';


function App() {
  const title = 'welcome';
  const person = { name: 'javi', age: 50 };
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
