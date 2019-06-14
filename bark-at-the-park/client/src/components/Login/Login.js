import React, { useState } from 'react'

import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

import './Login.scss'

// const logout = (response) => { console.log('Logout:',response); }

export default function Login () {
    const [logged, setLogin] = useState(false);
    
    const responseGoogle = (response) => { 
        setLogin(true)
        console.log('Respuesta:',response); 
    }

    const logout = () => {
        setLogin(false)
        console.log('user logged?', logged)
    }

    return (
        <div className="log-btn">
            {
                logged ? 
                    <GoogleLogout
                        buttonText="Logout"
                        onLogoutSuccess={logout}
                    >
                    </GoogleLogout>
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