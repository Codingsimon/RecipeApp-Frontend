import React from 'react'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button onClick={() => loginWithRedirect()}>Log In</button>
    )
}

export default LoginButton
