//@ core
import React, { Component } from 'react';

//@ components
import Navbar from '../Navbar/Navbar';
import Content from '../Content/Content';

//@ styles
import '../Homepage/Homepage.scss'

export default class Homepage extends Component {
    render() {
        return (
            <div className="Homepage">
                <div className="Homepage__Navbar">
                    <Navbar />
                </div>
                <div className="Homepage__Content">
                    <Content />
                </div>
            </div>
        )
    }
}
