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

        var i=this.props.contador;
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="links text-white">
                        <Link to="/">Lista usuarios</Link>
                        <Link to="/created">New User</Link>
                        <span className="badge badge-pill badge-light ml-2"> usuarios: {i}
                        </span>
                    </div>
                    <div className="links text-left">
                       <p style={ color: 'white' }</p>{this.props.profile}
                    </div>
                    <div className="links text-white text-left">
                       {this.props.btnNav}
                    </div>
                </nav>
            </div>
        )
    }

}

export default Navigation;
