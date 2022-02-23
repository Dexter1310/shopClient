import React, {Component} from "react";
import logo from "./colores.";

class Navigation extends Component{

    render(){

        return(

            <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="links">
                    <a href="/">home</a>
                    <a href="/create">New User</a>
                </div>
                <img src={logo} style={{width:50}}/>
            </nav>
       
        </div>
        )
    }

}

export default Navigation;
 