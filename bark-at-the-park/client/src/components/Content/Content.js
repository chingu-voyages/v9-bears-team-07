import React, { Component } from 'react'

import Map from '../Map/Map'

import './Content.scss'

import parks from '../../assets/parks.json'

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: ''
        }
    }

    toggleClass(index, e) {
        this.setState({
            activeIndex: index
        })
    }
    render() {
        const { selectPark } = this.props;

        return (
            <div className="Content">
                <div className="Content__Header">
                    Welcome! Please pick a park from the list below and check in:
                </div>
                <div className="Content__Body">
                    <div className="Content__Body-Map">
                        <Map />
                    </div>
                    <div className="Content__Body-Parks">
                        <div className="Content__Body-Parks-list">
                            {parks.map((park, i) => {
                                return (
                                    <div key={i} className="Content__Body-Parks-list-park">
                                        <h3>{park.name}</h3>
                                        <h3>{park.location}</h3>
                                        <h3>Users checked in: {park.online}</h3>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="Content__Body-Parks-Checkin">
                            CHECKIN
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
