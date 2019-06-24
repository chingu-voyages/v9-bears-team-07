import React, { Component } from 'react'

import '../Navbar/Navbar.scss'

export default class Navbar extends Component {
    logout() {
        localStorage.setItem('logged', false)
    }

    render() {
        return (
            <div className="Navbar">
                <div>Home</div>
                <div>Profile</div>
                <div>Friends</div>
                <div onClick={() => this.logout()}>Logout</div>
            </div>
        )
    }
}
