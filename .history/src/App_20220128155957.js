import logo from './logo.svg';
import './App.css';

function App() {
  const title='welcome in this block';
  return (
    <div className="App">
      <div className='container'><h1>App component</h1>
      <h2>{title}</h2>
      <img src='{logo}'></img>
      </div>
    </div>
  );
}

export default App;
