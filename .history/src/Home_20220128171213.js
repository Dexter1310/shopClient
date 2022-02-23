const Home = () => {
    const clickButton = (name) => {
        console.log('hello ninjas'+name);
    }
   

    const [name,setName]=initName('mario');
    return (

        <div className="home">
            <p>{name}</p>

            <h1>Home</h1>
            <button onClick={()=>clickButton('javi')}>Click me</button>
        </div>

    );
}

export default Home;