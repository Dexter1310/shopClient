import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const Logout = () => {
    const {logout}= useAuth0()
  return (
    <div>
        <button onClick={()=>Lo}>Logout</button>


    </div>
  )
}
