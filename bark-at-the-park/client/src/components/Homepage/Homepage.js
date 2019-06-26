//@ core
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

//@ components
import Navbar from '../Navbar/Navbar';
import Content from '../Content/Content';

//@ styles
import '../Homepage/Homepage.scss'
class Homepage extends Component {
    parkCheckin = () => {
      axios.patch('/checkin/1', {
        park: {
          user: {
            id: 8
          }
        }
      })
      .then(res => console.log('response: ', res))
      .catch(err => console.error(err))
    }
    loggued() {
        if (localStorage.getItem('logged') === 'true') {
            return (
                <div className="Homepage">
                    <div className="Homepage__Navbar">
                        <Navbar />
                    </div>
                    <div className="Homepage__Content">
                        <Content />
                    </div>
                    <div className="Homepage__Check">
                        <div className="Homepage__Check-text" onClick={this.parkCheckin}>
                            Checkin
                        </div>
                    </div>
                </div>
            )
        } else {
            this.props.history.push('/')
            return null
        }
    }
    render() {
        return this.loggued()
    }
}

export default withRouter(Homepage)