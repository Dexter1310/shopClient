import React from 'react';
import { Config } from '@testing-library/react';

class Users extends React.Component {


    componentDidMount() {
       
            // Simple GET request using fetch
            fetch('https://api.npms.io/v2/search?q=react')
                .then(response => response.json())
  
        
    }

    render() {

        console.log(com)

        return (
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