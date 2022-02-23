import React from 'react'
import { useParams } from 'react-router-dom'
import { UserForm } from './UserForm'

const EditUser = () => {
  let {id} = useParams()
  console.log(id)
  
  return (
  <UserForm />
  )
}

export default EditUser