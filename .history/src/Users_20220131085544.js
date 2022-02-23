import React from 'react';
import { Config } from '@testing-library/react';

class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalReactPackages: null
        };
    }

    componentDidMount() {
        // Simple GET request using fetch
        // fetch('http://localhost:8000/api/users')
        //     .then(response => response.json())
        //     .then(data => this.setState({ totalReactPackages: data }));


            fetch(`http://localhost:8000/api/users`).then(users => {
                this.setState({ users: users.data, loading: false})
            })
    }

    render() {
        const { totalReactPackages } = this.state;
        const loading = this.state.loading;

        console.log(loading)
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">
                {loading ? ({user.name})
            
                    {/* Total react packages: {totalReactPackages} */}
                </div>
            </div>
        );
    }
}

export { Users }; 