import React from 'react';
import { Users } from "./Users";
import logo from "./colores.jpg";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar ">
                <div className="links">
                    <a href="/">home</a>
                    <a href="/create">New User</a>
                </div>
                <img src={logo} style={{width:20}}/>
            </nav>
       
        </div>

    );
}

export default Navbar;