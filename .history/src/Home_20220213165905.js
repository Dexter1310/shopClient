import React, { useCallback, useState } from "react";
import { Users } from "./Users";

const Home = () => {
    // const clickButton = (name) => {
    //     console.log('hello ninjas' + name);
    // }
    // const [name, setName] = useState('mario');
    
  
    return (


        <div className="home">
 
            {/* <p>{name}</p>
            <h1>Home</h1>
            <button onClick={() => clickButton('javi')}>Click me</button>
            <button onClick={() => setName('paco')}>change name</button> */}
            <Users count/>

          





        </div>

    );
}

export default Home;