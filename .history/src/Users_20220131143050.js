import React from 'react';
import { Config } from '@testing-library/react';

class Users extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [{name}],
        };

        this.getRandomUsers = this.getRandomUsers.bind(this);
    }
    async getRandomUsers() {
        const res = await fetch('http://localhost:8000/api/users');
        const data = await res.json();
        return data;
    }

    async componentDidMount() {
        const users = await this.getRandomUsers();
        this.setState({ users });
    }


    render() {

        const User = ({ name,  email }) => (
            <div>
              <img src={avatar} />
              <div>
                <p>{name}</p>
                <p>{email}</p>
              </div>
            </div>
          );


        return (
            <div>
            
                {this.state.users.map((user) => (
                <User
                name={`${user.name.first} ${user.name.last}`}
                email={user.email}
                key={user.id.value}
              />
                ))}
             
            </div>
        );
    }
}

export { Users }; 