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
        .then(data => this.setState({ totalReactPackages: data }));
    }

    render() {

        var json =        fetch('http://localhost:8000/api/users')
        .then(response => response.json());
        var arr = [];
        Object.keys(json).forEach(function(key) {
          arr.push(json[key]);
        });


        return (

            <div className="card text-center m-3">
                            <ul>{arr.map(item => <MyAppChild key={item.label} label={item.label} value={item.value} />)}</ul>
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">


                    {/* Total react packages: {totalReactPackages} */}
                </div>
            </div>
        );
    }
}

export { Users }; 