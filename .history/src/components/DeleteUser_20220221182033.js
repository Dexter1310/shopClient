import React, { Component } from 'react';
import Us

export default class DeleteUser extends Component {
    
  render() {
    let { id } = useParams();
        return (
            <UserForm  id={id}/>
        );
  }
}
