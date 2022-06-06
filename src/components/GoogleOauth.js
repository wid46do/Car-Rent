import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleLogin from 'react-google-login';
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginGoogle(){
    const responseGoogle = (response) => {
        console.log(response);
    }

    const { loginWithRedirect } = useAuth0();

    return(
        <>
            <GoogleLogin
                clientId="187472125739-9c9mhqhruuq6hn1nf0mto0g90838e15k.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            {/* <button
            onClick={loginWithRedirect}
            >Login</button> */}
        </>
    )
}