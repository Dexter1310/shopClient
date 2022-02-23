import React from 'react'
import { useParams } from 'react-router-dom'
import U

const EditUser = () => {
  let {id} = useParams()
  
  return (
  <UserForm />
  )
}

export default EditUser