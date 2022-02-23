import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { UserForm } from './UserForm';const DEñlUser = () => {
    let { id } = useParams();

    return (
        <UserForm  id={id}/>
    );
}

export default EditUser
