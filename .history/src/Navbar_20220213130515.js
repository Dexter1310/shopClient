import { Users } from "./Users";
const Navbar = () => {
    return (
        <div></div>
        <nav className="navbar ">
            <div className="links">
                <a href="/">home</a>
                <a href="/create">New User</a>
            </div>
        </nav>
        <img src={logo}/>

    );
}

export default Navbar;