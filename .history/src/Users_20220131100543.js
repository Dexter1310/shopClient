import React from 'react';
import { Config } from '@testing-library/react';

class Users extends React.Component {



    render() {
const json= fetch('http://localhost:8000/api/users')
.then(response => response.json());
        console.log(json);

        
        const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.city}</td>
                </tr>
            )
        }

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