import React from 'react';
import { Config } from '@testing-library/react';
import { API_BASE_URL } from './config';
import { UserForm } from './components/UserForm';

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            contador: 0,
        };

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

    async clickUser(id) {
        window.location.href = '/created/' + id;

    }


    render() {


        { this.contador = this.state.users.length };
        return (
            <section>
                <div className='container' >

                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map((user) => (
                                <tr key={user.id} >
                                    <td >{user.name}</td>
                                    <td >{user.lastname}</td>
                                    <td >{user.email}</td>
                                    <td><button className='btn btn-warning' onClick={(e) => this.clickUser(user.id)}>modifica</button></td>
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