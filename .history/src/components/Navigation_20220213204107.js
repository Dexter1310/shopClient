import React, { Component } from "react";
import { Users } from "../Users";

class Navigation extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="links text-white">
                        <a href="/">home</a>
                        <a href="/create">New User</a>
                        <a href="/addUser"  onClick={() => clickButton()}>Agregar usuario</a>
                        <span className="badge badge-pill badge-light ml-2">
                            {this.state}
                           </span>
                    </div>
                </nav>

            </div>
        )
    }

}

export default Navigation;
