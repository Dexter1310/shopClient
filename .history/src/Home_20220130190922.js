import React, { useCallback, useState } from "react";


class Other extends React.Component {

    render() {
        if (this.props.state) {
            return (<div>hola que tal eso es la clase other</div>)
        } else {
            return (console.log(this.state));
        }
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
            {/* <button onClick={() => other.setState(true)}>change Satate</button> */}


        </div>
        

    );
    console.log(other.state)
}

export default Home;