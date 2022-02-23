import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import User

export default class DeleteUser extends Component {
    
  render() {
    let { id } = useParams();
        return (
            <UserForm  idDelete={id}/>
        );
  }
}
