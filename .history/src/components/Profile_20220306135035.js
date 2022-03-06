import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

export const Profile = () => {

    const { user, isAuthenticated } = useAuth0();

    return (

        isAuthenticated && (
            console.log(user.email_verified);

            <div>
                {console.log(user)}
                <span style={{ color: "red" }}>{user.given_name} {user.email_verified}</span>

            </div>
        )



        // isAuthenticated ? <div className='text-light'> logged in </div> : <div className='text-light'>logged out</div>


    )
}
