import React, { Component } from 'react'

export default class DeleteUser extends Component {
    let { id } = useParams();
  render() {
  
        return (
            <UserForm  id={id}/>
        );
  }
}
