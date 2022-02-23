import { Users } from "./Users";
impo
const Navbar = () => {
    return (
        <div>
            <nav className="navbar ">
                <div className="links">
                    <a href="/">home</a>
                    <a href="/create">New User</a>
                </div>
            </nav>
            <img src={logo} />
        </div>

    );
}

export default Navbar;