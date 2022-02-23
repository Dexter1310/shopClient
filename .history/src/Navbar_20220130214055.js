import { Users } from "./Users";
const Navbar = () => {
    return (
        <nav className="navbar ">
            <div className="links">
                <a href="/">home</a>
                <a href="/create">New User</a>
                < className={"nav-link"} to={"/users"}> Users </Link>
            
            </div>
        </nav>

    );
}

export default Navbar;