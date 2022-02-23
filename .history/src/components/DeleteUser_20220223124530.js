import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { Users } from '../Users';

const DeleteUser = () => {
    let { id } = useParams();
    this.props.parentCallback(this.state.users.length);
    return (
        <Users  idDelete={id}/>
    );
}

export default DeleteUser
