import React, { Component } from 'react'

import Map from '../Map/Map'
import Check from '../Check/Check'
import './Content.scss'

import parks from '../../assets/parks.json'

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.toggleClass = this.toggleClass.bind(this)
    }
    toggleClass(){
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }
    render() {
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
                                    <div key={i} 
                                        // className="Content__Body-Parks-list-park"
                                        className={this.state.active ? 'Content__Body-Parks-list-park active': 'Content__Body-Parks-list-park'} 
                                        onClick={this.toggleClass}
                                    >
                                        <h3>{park.name}</h3>
                                        <h3>{park.location}</h3>
                                        <h3>Users checked in: {park.online}</h3>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="Content__Body-Parks-Checkin">
                            {/* <div> */}
                                <Check />
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
