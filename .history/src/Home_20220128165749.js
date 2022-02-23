const Home = () => {
    const clickButton = () => {
        console.log('hello ninjas');
    }
    return (

        <div className="home">

            <h1>Home</h1>
            <button onClick={click}>Click me</button>
        </div>

    );
}

export default Home;