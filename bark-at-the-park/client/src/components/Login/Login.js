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
            logged: false,
            email: '',
            password: ''
        }
    }

    responseGoogle = (response) => {

        axios.post('http://localhost:3001/auth/google_login', {
            client_id: response.getAuthResponse().id_token
        })
        .then(res => {
            axios.get('http://localhost:3000/users')
            console.log('res', res)
            return this.props.history.push('/homepage')
        })
        .catch(err => console.error(err))
        localStorage.setItem('logged', 'true')

    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleEmailLogin = (event) => {
      event.preventDefault();
      axios.post('http://localhost:3001/auth/email_login', {
          auth: this.state
      })
      .then(res => {
          console.log('res', res)
          console.log('props',this.props)
          this.setState({
            email: '',
            password: ''
          })
          return this.props.history.push('/homepage')
      })
      .catch(err => console.error(err))

    }

    render() {
        return (
            <div className="login">
                <div className="login__form">
                    <form onSubmit={this.handleEmailLogin}>
                        <div className="input">Email</div>
                        <p><input type="email" value={this.state.email} onChange={this.handleChange} name="email" /></p>
                        <div className="input">Password</div>
                        <p><input type="password" value={this.state.password} onChange={this.handleChange} name="password" /></p>
                        <div className="input">
                            <input type="submit" id="submit" value="Sign Up" className="submit"/>
                        </div>
                    </form>
                </div>
                <div className="login__google">
                    <GoogleLogin
                        clientId="315721689688-0kcdvhqs7f2p8u6nc35v63ovlf59c62d.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </div>
        )
    }
}

export default withRouter(Login);


                {/* <GoogleLogout
                    buttonText="Logout"
                    onLogoutSuccess={this.logout}
                /> */}
