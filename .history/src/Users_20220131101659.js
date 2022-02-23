import React from 'react';
import { Config } from '@testing-library/react';

class Users extends React.Component {

    componentDidMount() {
        // Simple GET request using fetch
        // fetch('http://localhost:8000/api/users')
        //     .then(response => response.json())
        //     .then(data => this.setState({ totalReactPackages: data }));


    

        fetch('http://localhost:8000/api/users')
        .then(response => response.json())
        .then(data => this.setState({ totalReactPackages: data.total }));
    }

    render() {



        console.log(this.state.users)
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">


                    {/* Total react packages: {totalReactPackages} */}
                </div>
            </div>
        );
    }
}

export { Users }; 