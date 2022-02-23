import React, { useCallback, useState } from "react";


class Other extends React.Component {
    state = { users: [], loading: true};

   getUsers() {
      this.get(`http://localhost:8000/api/users`).then(users => {
          this.setState({ users: users.data, loading: false})
      })
    }
    
    render() {
        if (this.state) {
            return (<div>hola que tal eso es la clase other</div>)
        } else {
            return (<div>other</div>);
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
            <button onClick={() => console.log(othe)}>change Satate</button>


        </div>
        

    );
    console.log(other.state)
}

export default Home;