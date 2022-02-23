import React, { Component } from "react";
import { icons } from "react-icons";
import { Link } from "react-router-dom";
import { Users } from "../Users";
import { UserForm } from "./UserForm";



class Navigation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
   

        console.log(this.props.contador)
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="links text-white">
                        <Link to="/">Lista usuarios</Link>
                        <Link to="/created">New User</Link>
                        <span className="badge badge-pill badge-light ml-2">this.
                        </span>
                    </div>
                    <div className="links text-white text-left">
                        <Link style={{  color: 'white' }} to="/login">Login</Link>
                    </div>
                </nav>

            </div>
        )
    }

}

export default Navigation;
