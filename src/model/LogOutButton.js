import React from 'react'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

const LogOutButton = () => {
    const { logout } = useAuth0();
    return (
        <button className="btn btn-primary mt-3" type="submit" onClick={() => logout()}>Log Out</button>
    )
}

export default LogOutButton
