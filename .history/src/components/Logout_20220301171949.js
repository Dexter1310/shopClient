import React from 'react'
import { useAuth0,isAuthenticated } from '@auth0/auth0-react'

export const Logout = () => {
    const {logout}= useAuth0()
  return (
    isAuthenticated &&
    <div>
        <button className='btn btn-danger' onClick={()=>logout()}>Logout</button>
    </div>
  )
}
