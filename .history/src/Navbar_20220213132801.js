import React from 'react';
import { Users } from "./Users";
import logo from "./colores.jpg";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dak">
                <div className="links">
                    <a href="/">home</a>
                    <a href="/create">New User</a>
                </div>
                <img src={logo} style={{width:50}}/>
            </nav>
       
        </div>

    );
}

export default Navbar;