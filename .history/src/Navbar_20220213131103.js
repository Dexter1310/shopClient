import { Users } from "./Users";
import logo from "./public/logo192.png";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar ">
                <div className="links">
                    <a href="/">home</a>
                    <a href="/create">New User</a>
                </div>
            </nav>
            {/* <img src={logo} className="App-logo"/> */}
        </div>

    );
}

export default Navbar;