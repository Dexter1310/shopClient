import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';

const { user } = useAuth0();
export const Profile = () => {


    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div>
                <JSONPretty data={} />
            </div>
        )

    )
}
