//@ core
import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

//@ components


// @ libraries
import axios from 'axios';

//@ styles
import './Login.scss';

export default function Login () {
    const [logged, setLogin] = useState(false);

    const responseGoogle = (response) => {
        setLogin(true)
        axios.post('http://localhost:3001/auth/login', {
            client_id: response.getAuthResponse().id_token
        })
        .then(res => console.log(res))

        // localStorage.setItem('logged', true)

    }

    const logout = () => {
        setLogin(false)
        // localStorage.setItem('logged', false)
    }

    return (
        <div className="log-btn">
            {
                logged ?
                    <GoogleLogout
                        buttonText="Logout"
                        onLogoutSuccess={logout}
                    />
                    :
                    <GoogleLogin
                        clientId="315721689688-0kcdvhqs7f2p8u6nc35v63ovlf59c62d.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />

            }
        </div>
    )

}
