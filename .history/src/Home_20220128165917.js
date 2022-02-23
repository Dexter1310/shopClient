const Home = () => {
    const clickButton = (name) => {
        console.log('hello ninjas');
    }
    return (

        <div className="home">

            <h1>Home</h1>
            <button onClick={clickButton}>Click me</button>
        </div>

    );
}

export default Home;