import React, { Component } from "react";
import { Users } from "../Users";
import { UserForm } from "./UserForm";
import { Link,NavLink } from "react-router-dom";


class Navigation extends Component {

    render() {

        function clickButton(e) {
            e.preventDefault()

        }
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="links text-white">
                        <Link to="/">Lista usuarios</Link>
                        <NavLink to="/created" aria-activedescendant="">New User</NavLink>
                        {/* <a href='/adduser' onClick={(e) => clickButton(e)}>Agregar usuario</a> */}
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