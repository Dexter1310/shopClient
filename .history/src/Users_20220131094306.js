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
        this.setState({ totalReactPackages: data.total })
    }

    render() {
        const [data,setData]=useState([]);

        const getData=()=>{
            fetch('data.json'
            ,{
              headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
            }
            )
              .then(function(response){
                console.log(response)
                return response.json();
              })
              .then(function(myJson) {
                console.log(myJson);
                setData(myJson)
              });
          }





        const { totalReactPackages } = this.state;

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