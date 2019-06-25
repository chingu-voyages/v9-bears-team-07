import React, { Component } from 'react'

import Map from '../Map/Map'

import axios from 'axios';

import './Content.scss'

export default class Content extends Component {

    parkCheckin = () => {
      axios.patch('/checkin/1', {
        park: {
          user: {
            id: 3
          }
        }
      })
      .then(res => console.log('response: ', res))
      .catch(err => console.error(err))
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
                <div className="Content_ParkList">
                    <ul>
                        <li onClick={this.parkCheckin}>Park</li>
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
