import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

export const Profile = () => {


    const { user, isAuthenticated } = useAuth0();
    const data = await user.json();
    return
        <div>
        <p className='text-light'>{data.given_name}</p>
        <JSONPretty data={user} />
        </div>

    )
}
