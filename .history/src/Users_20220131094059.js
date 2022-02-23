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
        const response = await fetch('https://api.npms.io/v2/search?q=react');
        const data = await response.json();
        this.setState({ totalReactPackages: data.total })
    }

    render() {

        return ( const { totalReactPackages } = this.state;
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">
        
            
                    Total react packages: {totalReactPackages}
                </div>
            </div>
        );
    }
}

export { Users }; 