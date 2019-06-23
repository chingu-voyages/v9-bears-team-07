import React, { Component } from 'react'

import '../Navbar/Navbar.scss'

export default class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div>Home</div>
                <div>Profile</div>
                <div>Friends</div>
                <div>Logout</div>
            </div>
        )
    }
}
