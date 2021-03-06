import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Logout } from './Logout';
export const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    
    isAuthenticated ? // if user is authentificated
      <Logout />  
      :
      <button className='btn btn-warning' onClick={() => loginWithRedirect()}>login</button>
      
  )
}
