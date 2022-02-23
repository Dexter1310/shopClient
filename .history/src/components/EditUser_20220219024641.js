import React from 'react'
import { useParams } from 'react-router-dom'

const EditUser = () => {
  let {id} = useParams()
  
  return (
    <section >
      <p>Now showing post {id}</p>
    </section>
  )
}

export default Blog