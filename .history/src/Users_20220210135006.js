import React from 'react';
import { Config } from '@testing-library/react';

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };

        this.getRandomUsers = this.getRandomUsers.bind(this);
    }
    async getRandomUsers() {
        API_BASE_URL
        const res = await fetch('http://localhost:8000/api/users');
        const data = await res.json();
        return data;
    }

    async componentDidMount() {
        const users = await this.getRandomUsers();
        this.setState({ users });
    }


    render() {

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export { Users }; 