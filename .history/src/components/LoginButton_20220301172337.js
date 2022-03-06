import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import 
export const LoginButton = () => {
    const {loginWithRedirect}= useAuth0();
  return (
   


        isAuthenticated ? 
    
        <button className='btn btn-danger' onClick={()=>logout()}>Logout</button>
    
        
        :      <button className='btn btn-warning' onClick={() => loginWithRedirect()}>login</button> 
         
  )
}
