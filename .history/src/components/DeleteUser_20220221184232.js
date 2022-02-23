import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { UserForm } from './UserForm';

const DeUser = () => {
    let { id } = useParams();

    return (
        <UserForm  id={id}/>
    );
}

export default EditUser
