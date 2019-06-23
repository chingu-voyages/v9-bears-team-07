//@ core
import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
// import { GoogleLogout } from 'react-google-login';
import { withRouter } from 'react-router';

// @ libraries
import axios from 'axios';

//@ styles
import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logged: false
        }
    }
    
    responseGoogle = (response) => {

        axios.post('http://localhost:3001/auth/login', {
            client_id: response.getAuthResponse().id_token
        })
        .then(res => {
            console.log('res', res)
            console.log('props',this.props)
            return this.props.history.push('/homepage')
        })
        .catch(err => console.err(err))
        localStorage.setItem('logged', true)
    
    }
    
    render() {
        return (
            <div className="log-btn">
                {/* <GoogleLogout
                    buttonText="Logout"
                    onLogoutSuccess={this.logout}
                /> */}
                <GoogleLogin
                    clientId="315721689688-0kcdvhqs7f2p8u6nc35v63ovlf59c62d.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}

export default withRouter(Login);