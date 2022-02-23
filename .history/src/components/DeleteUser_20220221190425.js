import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { Users } from '../Users';

const DeleteUser = () => {
    let { id } = useParams();

    return (
        <UserForm  idDelete={id}/>
    );
}

export default DeleteUser
