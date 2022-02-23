import React from 'react'
import { useParams } from 'react-router-dom'
import { UserForm } from './UserForm'


const EditUser = () => {
    let { id } = useParams();

    return (
        <User  id={id}/>
    );
}

export default EditUser