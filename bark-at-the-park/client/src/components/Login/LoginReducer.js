
import React, { useReducer, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { withRouter } from 'react-router';
import axios from 'axios';
import './Login.scss';
import reducer from '../../reducer';

export default function Login() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ state, dispatch ] = useReducer(reducer, { logged: 'false'})
  console.log(state)
  const responseGoogle = (response) => {
    axios.post('http://localhost:3001/auth/google_login', {
      client_id: response.getAuthResponse().id_token
    })
    .then(res => {
      axios.get('http://localhost:3000/users')
      return this.props.history.push('/homepage')
    })
    .catch(err => console.error(err))

    dispatch({ type: 'LOGGED_OK '})

    localStorage.setItem('logged', 'true')
    // this.props.history.push('/homepage')
  }

  const handleEmailLogin = (event) => {
    event.preventDefault();
    console.log(email, ' - ',password)
    // axios.post('http://localhost:3001/auth/email_login', {
    //   auth: this.state
    // })
    //   .then(res => {
    //     console.log('res', res)
    //     console.log('props', this.props)
    //     this.setState({
    //       email: '',
    //       password: ''
    //     })
    //     return this.props.history.push('/homepage')
    //   })
    //   .catch(err => console.error(err))
  }

  return (
    <div className="login">
      <h1>Loggued: {state.logged}</h1>
      <div className="login__form">
        <form onSubmit={handleEmailLogin}>
          <div className="input">Email</div>
          <p><input type="email"  onChange={e => setEmail(e.currentTarget.value)} name="email" /></p>
          <div className="input">Password</div>
          <p><input type="password"  onChange={e => setPassword(e.currentTarget.value)} name="password" /></p>
          <div className="input">
            <input type="submit" id="submit" value="Sign Up" className="submit" />
          </div>
        </form>
      </div>
      <div className="login__google">
        <GoogleLogin
          clientId="315721689688-0kcdvhqs7f2p8u6nc35v63ovlf59c62d.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  )
}




//     handleChange = (event) => {
//       this.setState({
//         [event.target.name]: event.target.value
//       })
//     }

//     handleEmailLogin = (event) => {


//     }

//     render() {
//         return (

//         )
//     }
// }

// export default withRouter(Login);