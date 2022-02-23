import React, { Component } from "react";
import { Users } from "../Users";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Navigation extends Component {

    render() {

        function clickButton(e){
            e.preventDefault()

        }
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="links text-white">
                    <Switch>
              <Route path="/home" component={Home} />
            </Switch>
                        <a href="/">home</a>
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
