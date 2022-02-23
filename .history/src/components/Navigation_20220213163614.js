import React, {Component} from "react";


class Navigation extends Component{

    render(){

        return(

            <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="links">
                    <a href="/">home</a>
                    <a href="/create">New User</a>
                </div>
            </nav>
            <span className="badge badge-pill badge-light"></span>
        </div>
        )
    }

}

export default Navigation;
 