import React, { Component } from 'react'

import Map from '../Map/Map'

import './Content.scss'

import parks from '../../assets/parks.json'

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0
        }
    }

    toggleClass(index, e) {
        this.setState({
            activeIndex: index
        })
    }
    render() {
        return (
            <div className="Content">
                <div className="Content__Header">
                    Hello! Please pick a park from the list below:
                </div>
                <div className="Content__Map">
                    <Map />
                </div>
                <div className="Content__ParkList">
                    {parks.map((park, i) => {
                        return (
                            <div key={i} className="Content__Parklist-park">
                                <ul onClick={() => this.toggleClass(i)}
                                    className={this.state.activeIndex === i ? 'active' : null}>
                                    <li>{park.name}</li>
                                    <li>{park.location}</li>
                                    <li>Users checked in: {park.online}</li>
                                    {/* <li>Reviews: </li>
                                    <li>Comment: {park.review.comment}</li>
                                    <li>User: {park.review.user}</li> */}
                                </ul>
                         
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
}
