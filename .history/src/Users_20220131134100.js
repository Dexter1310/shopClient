import React from 'react';
import { Config } from '@testing-library/react';

class Users extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         totalReactPackages: null
    //     };
    // }
    // componentDidMount() {

    //     fetch('http://localhost:8000/api/users')
    //     .then(response => response.json())
    //     .then(data => this.setState({ totalReactPackages: data }));
    // }
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
        return data.results;
      }
    
      async componentDidMount() {
        const users = await this.getRandomUsers();
        this.setState({ users });
      }
    

    render() {


        console.log(users)

        return (
            <div>
        
            </div>
          );
    }
}

export { Users }; 