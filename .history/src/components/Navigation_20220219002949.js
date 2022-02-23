import React, { Component } from "react";
import { icons } from "react-icons";
import { Link } from "react-router-dom";
import { Users } from "../Users";
import { UserForm } from "./UserForm";
import {IoAdd} from "react-icons/io";


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
                        <a href="/created/user"><IoIosA /> New User</a>
                      
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
