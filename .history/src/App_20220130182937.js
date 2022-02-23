import './App.css';
import Navbar from './Navbar';
import Home from './Home';

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
      </div>
    </div>
  );
}

export default App;
