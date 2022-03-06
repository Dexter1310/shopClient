import React from 'react'
import { useAuth0} from '@auth0/auth0-react'

export const Logout = () => {
    const {logout,isAuthenticated}= useAuth0()
  return (

      isuthenticated ? <div className='text-light'> logged in </div> : <div className='text-light'>logged out</div>
    }
  
  )
}
