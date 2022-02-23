import { useCallback, useState } from "react";
import sss from "./sss";


const Home = () => {
    const clickButton = (name) => {
        console.log('hello ninjas' + name);
      return  <p>pepepepepepepepe</p>
    }
    const [name, setName] = useState('mario');
    return (

        <div className="home">
            <p>{name}</p>
            <h1>Home</h1>
            <button onClick={() => clickButton('javi')}>Click me</button>
            <button onClick={() => setName('paco')}>change name</button>
            <button onClick={() => <sss /> }>other button</button>
        </div>

    );
}

export default Home;