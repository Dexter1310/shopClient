import logo from './logo.svg';
import './App.css';ç
import Navbar from './Navbar';

function App() {
  const title= 'welcome';
  const person={name:'javi',age:50};
  return (
    <div className="App">
      <
     
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{title}</h1>
        <h2>{person.name}</h2>

    </div>
  );
}

export default App;
