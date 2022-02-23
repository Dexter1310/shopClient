import React from 'react'
import { useParams } from 'react-router-dom'

const Blog = () => {
  let {id} = useParams()
  
  return (
    <section className="Blog">
      <p>Now showing post {id}</p>
    </section>
  )
}

export default Blog