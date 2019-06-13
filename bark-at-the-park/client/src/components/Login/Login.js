import React, { Component } from 'react'

import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

const responseGoogle = (response) => { console.log('Respuesta:',response); }
const logout = (response) => { console.log('Logout:',response); }

export default class Login extends Component {
    render() {
        return (
            <div>
                 <GoogleLogin
                    clientId="315721689688-0kcdvhqs7f2p8u6nc35v63ovlf59c62d.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <GoogleLogout
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                >
                </GoogleLogout>
            </div>
        )
    }
}
