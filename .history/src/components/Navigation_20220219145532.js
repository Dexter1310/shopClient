import React, { Component } from "react";
import { icons } from "react-icons";
import { Link } from "react-router-dom";
import { Users } from "../Users";
import { UserForm } from "./UserForm";



class Navigation extends Component {

    render() {

        function clickButton(e) {
            e.preventDefault()
        }
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="links text-white">
                        <a href="/">Lista usuarios</a>
                        <Link to="/created">New User</Link>
                        {/* <a href='/adduser' onClick={(e) => clickButton(e)}>Agregar usuario</a> */}

                        <Link to="/login"
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