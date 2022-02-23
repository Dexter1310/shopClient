const Home = () => {
    const clickButton = (name) => {
        console.log('hello ninjas'+name);
    }

    const name =[name,setName]=
    return (

        <div className="home">

            <h1>Home</h1>
            <button onClick={()=>clickButton('javi')}>Click me</button>
        </div>

    );
}

export default Home;