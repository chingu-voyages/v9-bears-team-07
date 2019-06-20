//@ core
import React, { Component } from 'react'

//@ components
import Navbar from '../Navbar/Navbar'

//@ styles
import '../Homepage/Homepage.scss'

export default class Homepage extends Component {
    render() {
        return (
            <div className="Homepage">
                <Navbar />
                <h1>CONTENT</h1>
                <h1>FOOTER</h1>
            </div>
        )
    }
}
