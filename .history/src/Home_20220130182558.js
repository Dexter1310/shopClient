import React, { useCallback, useState } from "react";

class Sss extends React.Component {
 

    render() {
        return (
            <div>hola que tal </div>

        )
    }


}

const Home = () => {
    const clickButton = (name) => {
        console.log('hello ninjas' + name);

    }
    const [name, setName] = useState('mario');
   
    return (
        
      
        <div className="home">
   
            <p>{name}</p>
            <h1>Home</h1>
            <button onClick={() => clickButton('javi')}>Click me</button>
            <button onClick={() => setName('paco')}>change name</button>
    
         
        </div>

    );
}

export default Home;