import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


export const Profile = () => {
    const {usde}= useAuth0();
  return (
   <div className='text-light'>JSON.stringify(user)</div>
  )
}
