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
            selectedPark: '',
            checkin: ''
        };
        this.toggleClass = this.toggleClass.bind(this)
        this.handleCheckin = this.handleCheckin.bind(this)
    }

    toggleClass(park) {
        this.setState({selectedPark: park.name})
    }

    handleCheckin(status) {
        if (status) {
            this.setState({
                checkin: ''
            })
        } else{
            this.setState({
                checkin: this.state.selectedPark,
                active: status
            })
        }
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
                                        className='Content__Body-Parks-list-park'
                                        onClick={() => this.toggleClass(park)}
                                    >
                                        <h3>{park.name}</h3>
                                        <h3>{park.location}</h3>
                                        <h3>Users checked in: {park.online}</h3>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="Content__Body-Parks-Checkin">
                            <Check handleCheckin={this.handleCheckin}/>
                        </div>
                        <div>
                            Selected park: {this.state.checkin}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
