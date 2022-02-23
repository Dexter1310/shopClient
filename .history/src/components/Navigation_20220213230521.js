import React, { Component } from "react";
import { Users } from "../Users";

class Navigation extends Component {

    render() {

        function clickButton(e){
            e.preventDefault();
          
        }
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="links text-white">
                        <link to="/">home</
                        <a href="/create">New User</a>
                        <a href='/adduser'  onClick={(e) => clickButton(e)}>Agregar usuario</a>
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