import { useCallback, useState } from "react";

const Home = () => {
    const clickButton = (name) => {
        console.log('hello ninjas'+name);
    }

    const proba 

    const [name,setName]= useState('mario');
    return (

        <div className="home">
            <p>{name}</p>

            <h1>Home</h1>
            <button onClick={()=>proba()}>Click me</button>
            <button onClick={()=>clickButton('javi')}>Click me</button>
            <button onClick={()=>setName('paco')}>change name</button>
        </div>

    );
}

export default Home;