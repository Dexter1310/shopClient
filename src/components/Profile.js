import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

export const Profile = () => {

    const { user, isAuthenticated } = useAuth0();

    return (

        isAuthenticated && (
            <div>
                {console.log(user.email_verified)}
                <span style={{ color: "red" }}>{user.given_name}  {user.family_name}</span>
                <br></br>
                <small style={{ color: "yellow" }}>{user.email}</small>

            </div>

        )
    )
}
