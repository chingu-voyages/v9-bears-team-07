import React, { Component } from 'react'

import '../Navbar/Navbar.scss'

export default class Navbar extends Component {
    render() {
        return (
            <div className="Navbar_Container">
                <div>Home</div>
                <div>Profile</div>
                <div>Friends</div>
                <div>Logout</div>
            </div>
        )
    }
}
