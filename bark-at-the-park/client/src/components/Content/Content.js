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
                    {/* <div className="Content__Body__Map"> */}
                        <Map />
                    {/* </div> */}
                    <div>
                        {parks.map((park, i) => {
                            return (
                                <div key={i} className="Content__Parklist-park">
                                    <div >
                                        <ul onClick={() => { 
                                            this.toggleClass(i)
                                            selectPark(park)}}
                                            className={this.state.activeIndex === i ? 'active' : null}>
                                            <li>{park.name}</li>
                                            <li>{park.location}</li>
                                            <li>Users checked in: {park.online}</li>
                                
                                        </ul>
                                    </div>
                                    <span className={this.state.activeIndex === i && this.state.checkout ? 'checkedIn' : null}> 
                                    {
                                        this.props.checkedIn && this.state.activeIndex === i ?
                                        'CHECKED IN'
                                        :
                                        null
                                    }
                                    </span>
                            
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
