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
                        <span >
                            {this.state.users.lenght}</span>
                    </div>
                </nav>

            </div>
        )
    }

}

export default Navigation;
