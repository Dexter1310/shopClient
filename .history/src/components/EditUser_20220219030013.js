import React from 'react'
import { useParams } from 'react-router-dom'
import { UserForm } from './UserForm'
import { API_BASE_URL } from "../config";

const EditUser = () => {
    let { id } = useParams();
   const user=  await fetch(API_BASE_URL + '/api/user/' + id);
    console.log(user)

    return (
        <UserForm />
    )
}

export default EditUser