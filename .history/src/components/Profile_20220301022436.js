import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


export const Profile = () => {
    const {}= useAuth0();
  return (
   <div className='text-light'>Profile</div>
  )
}
