import React from 'react'
import { useParams } from 'react-router-dom'

const EditUser = () => {
  let {id} = useParams()
  
  return (
  {id}
  )
}

export default Blog