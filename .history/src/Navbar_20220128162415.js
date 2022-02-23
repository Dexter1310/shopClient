import Home from './Home';
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1> the dojo blog</h1>
            <div className="links">
                <a href="/">home</a>
                <a href="/create">New User</a>
                <Home /
            </div>
        </nav>

    );
}

export default Navbar;