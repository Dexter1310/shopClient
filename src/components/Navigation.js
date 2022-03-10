import React, { Component } from "react";
import { icons } from "react-icons";
import { Link } from "react-router-dom";
import { Users } from "../Users";
import { UserForm } from "./UserForm";
import { Profile } from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";


class Navigation extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        var i = this.props.contador;
        var profile = this.props.profile;
        return (

            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="links text-white">
                   <Links />
                   usuarios: {i}
                    </div>
                    <div className="text-right">{profile}</div>
                    <div className="links text-white text-left">
                        {this.props.btnNav}
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation;
export const Links = () => {
    const { user, isAuthenticated } = useAuth0();
    
    return (
        isAuthenticated && (
            <section>
                <Link to="/">Lista usuarios</Link>
                <Link to="/created">New User </Link>
            </section>
        )
    )


}

