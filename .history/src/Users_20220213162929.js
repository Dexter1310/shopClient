import React from 'react';
import { Config } from '@testing-library/react';
import { API_BASE_URL } from './config';

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };

        this.getRandomUsers = this.getRandomUsers.bind(this);
    }
    async getRandomUsers() {

        const res = await fetch(API_BASE_URL + '/api/users');
        const data = await res.json();
        return data;
    }

    async componentDidMount() {
        const users = await this.getRandomUsers();
        this.setState({ users });
    }


    render() {

        return (
            <section>
                <div className='container' >
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map((user) => (
                                <tr key={user.id}>
                                    <td className='card'>{user.name}</td>
                                    <td className='card'>{user.lastname}</td>
                                    <td className='card'>{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

export { Users }; 