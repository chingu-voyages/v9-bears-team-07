import React, { Component } from 'react'

import '../Navbar/Navbar.scss'
import { withRouter } from 'react-router';


class Navbar extends Component {
    logout() {
        localStorage.setItem('logged', 'false')
        if (window.gapi) {
            const auth2 = window.gapi.auth2.getAuthInstance()
            if (auth2 != null) {
                auth2.signOut().then(auth2.disconnect().then(this.props.onLogoutSuccess))
            }
        }
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="Navbar">
                <div onClick={() => this.props.history.push('/homepage')}>Home</div>
                <div onClick={() => this.props.history.push('/profile')}>Profile</div>
                <div onClick={() => this.logout()}>Logout</div>
            </div>
        )
    }
}

export default withRouter(Navbar)