import React from 'react'
import { useParams } from 'react-router-dom'
import { Users } from '../Users';


const EditUser = () => {
    let { id } = useParams();

    return (
        <Users  id={id}/>
    );
}

export default EditUser