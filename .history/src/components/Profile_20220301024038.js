import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const { user } = useAuth0();
export const Profile = () => {
  
    return (
        <div>
            <div>
            <p className='text-light'>{}</p>
            </div>
        </div>
    )
}
