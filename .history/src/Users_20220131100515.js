import React from 'react';
import { Config } from '@testing-library/react';

class Users extends React.Component {



    render() {
const json= fetch('http://localhost:8000/api/users')
.then(response => response.json());
        console.log(json);
        const DisplayData=JsonData.map(
            (info)=>{
              
                    <tr>
                        <td>{info.id}</td>
                        <td>{info.name}</td>
                        <td>{info.city}</td>
                    </tr>
                
            }

      
    }
    return({DisplayData})
}

export { Users }; 