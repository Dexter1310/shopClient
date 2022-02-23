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
                    <Table>
                        <th>Nombre</th>
                    </thead>
                    {this.state.users.map((user) => (
                        <tr>
                            <td key={user.id}>{user.name}</td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}

export { Users }; 