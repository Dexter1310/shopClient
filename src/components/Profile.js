import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

export const Profile = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div className='text-light'>...Cargando</div>

    } else {
        return (
            isAuthenticated && (
                <div>
                    {console.log('registrar')}
                    {console.log(user.email_verified)}
                    <div >
                        {/* <img style={{ width: '30px', float: 'left' }} src={user.picture} alt={user.given_name} /> */}
                        <span > {user.given_name}  {user.family_name}</span>
                        <br></br>
                        <small style= {{ color: "yellow" }}>{user.email}</small>
                    </div>
                </div>

            )
        )
    }


}
