import React, { useCallback, useState } from "react";


class Other extends React.Component {
    state = {
        show: true
    }

    render() {
        return (
            <div>hola que tal eso es la clase other</div>

        )
    }


}


const Home = () => {
    const clickButton = (name) => {
        console.log('hello ninjas' + name);

    }
    const [name, setName] = useState('mario');
    other= new Other();
   
    return (
        
      
        <div className="home">
       <Other />
            <p>{name}</p>
            <h1>Home</h1>
            <button onClick={() => clickButton('javi')}>Click me</button>
            <button onClick={() => setName('paco')}>change name</button>
            <button onClick={() => }>change name</button>
    
         
        </div>

    );
}

export default Home;