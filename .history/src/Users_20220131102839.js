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

        fetch('http://localhost:8000/api/users')
        .then(response => response.json())

    }

    render() {



        console.log(this.totalReactPackages.name)
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