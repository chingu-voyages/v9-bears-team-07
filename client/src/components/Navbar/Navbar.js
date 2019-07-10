import React from 'react'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import '../Navbar/Navbar.scss'

const Navbar = (props) => {
  const dispatch = useDispatch()

  function logout() {
    dispatch({ type: 'LOGGED_OUT' })

    if (window.gapi) {
      const auth2 = window.gapi.auth2.getAuthInstance()
      if (auth2 != null) {
        auth2.signOut().then(auth2.disconnect().then(props.onLogoutSuccess))
      }
    }
    props.history.push('/')
  }

  return (
    <div className="Navbar">
        <div onClick={() => props.history.push('/homepage')}>Home</div>
        <div onClick={() => props.history.push('/profile')}>Profile</div>
        <div onClick={() => logout()}>Logout</div>
    </div>
  )
}

export default withRouter(Navbar)