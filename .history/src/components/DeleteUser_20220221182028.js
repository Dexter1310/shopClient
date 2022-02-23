import React, { Component } from 'react'

export default class DeleteUser extends Component {
    
  render() {
    let { id } = useParams();
        return (
            <UserForm  id={id}/>
        );
  }
}
