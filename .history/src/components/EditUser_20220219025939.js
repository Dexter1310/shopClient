import React from 'react'
import { useParams } from 'react-router-dom'
import { UserForm } from './UserForm'

const EditUser = () => {
    let { id } = useParams();
   cons await fetch(API_BASE_URL + '/api/user/' + id);
    console.log(id)

    return (
        <UserForm />
    )
}

export default EditUser