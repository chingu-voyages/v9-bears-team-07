import React, { Component } from 'react'

import Map from '../Map/Map'

import './Content.scss'

export default class Content extends Component {
    render() {
        return (
            <div className="Content">
                <div className="Content__Header">
                    Hello! Please pick a park from the list below:
                </div>
                <div className="Content__Map">
                    <Map />
                </div>
                <div className="Content_ParkList">
                    <ul>
                        <li>Park</li>
                        <li>Park</li>
                        <li>Park</li>
                        <li>Park</li>
                        <li>Park</li>
                    </ul>
                </div>

            </div>
        )
    }
}
