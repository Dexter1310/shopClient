
const sss = () => {

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