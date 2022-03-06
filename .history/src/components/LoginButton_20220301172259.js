import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
export const LoginButton = () => {
    const {loginWithRedirect}= useAuth0();
  return (
        <button className='btn btn-warning' onClick={() => loginWithRedirect()}>login</button> 


        isAuthenticated ? 
    
        <button className='btn btn-danger' onClick={()=>logout()}>Logout</button>
    
        
        : <div className='text-light'>logged out</div>
         
  )
}
