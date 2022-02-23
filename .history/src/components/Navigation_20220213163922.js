import React, {Component} from "react";


class Navigation extends Component{

    render(){

        return(

            <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="links text">
                    <a href="/">home</a>
                    <a href="/create">New User</a>
                    <span className="badge badge-pill badge-light ml-2">1</span>
                </div>
            </nav>
           
        </div>
        )
    }

}

export default Navigation;
 