import React, { useCallback, useState } from "react";


class Other extends React.Component {
    constructor() {
        super();
        this.state = { users: [], loading: true};
    }

 
    
    render() {
     return (this.getUsers)
    }
}

const other = new Other();
const Home = () => {
    const clickButton = (name) => {
        console.log('hello ninjas' + name);
    }
    const [name, setName] = useState('mario');

    return (


        <div className="home">
            <Other />
            <p>{name}</p>
            <h1>Home</h1>
            <button onClick={() => clickButton('javi')}>Click me</button>
            <button onClick={() => setName('paco')}>change name</button>
            <button onClick={() => console.log(other.getUsers)}>change Satate</button>


        </div>
        

    );
    console.log(other.state)
}

export default Home;