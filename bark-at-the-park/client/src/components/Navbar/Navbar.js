import React, { Component } from 'react'

import '../Navbar/Navbar.scss'
import { withRouter } from 'react-router';


class Navbar extends Component {
    logout() {
        localStorage.setItem('logged', 'false')
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="Navbar">
                <div>Home</div>
                <div>Profile</div>
                {/* <div>Friends</div> */}
                <div onClick={() => this.logout()}>Logout</div>
            </div>
        )
    }
}

export default withRouter(Navbar)