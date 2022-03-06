import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


export const Profile = () => {
    const { user } = useAuth0();
    return (
        <div>
            <div>
            <p className='text-light'>{user.picture}</p>

        </div>
    )
}
