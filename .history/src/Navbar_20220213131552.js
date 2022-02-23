import React from 'react';
import { Users } from "./Users";
import logo from "./logo512.png";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar ">
                <div className="links">
                    <a href="/">home</a>
                    <a href="/create">New User</a>
                </div>
                <img src={logo} className="App-logo" style={{}}/>
            </nav>
       
        </div>

    );
}

export default Navbar;