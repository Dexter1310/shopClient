import React from 'react';
import { Config } from '@testing-library/react';

class Users extends React.Component {



    render() {
const json= fetch('http://localhost:8000/api/users')
.then(response => response.json());
        console.log(json);


        const DisplayData=json.map(
        (info)=>{
            return({info})
  
        })

        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">
                </div>
                {DisplayData.name}
            </div>
          
        );
    }
}

export { Users }; 