import React from 'react';
import { Config } from '@testing-library/react';

class Users extends React.Component {
     constructor(props) {
        super(props);

        this.state = {
            totalReactPackages: null
        };
    }


    

    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('http://localhost:8000/api/users');
        const data = await response.json();

    }

    render() {

        data = JSON.parse(fetch('http://localhost:8000/api/users'));
        console.log(data);

        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">
        
          
                </div>
            </div>
        );
    }
}

export { Users }; 