import React from 'react'
import { useParams } from 'react-router-dom'
import { UserForm } from './UserForm'
import { API_BASE_URL } from "../config";

const EditUser = () => {
    let { id } = useParams();

    return (
        <UserForm  id={id}/>
    );
}

export default EditUser