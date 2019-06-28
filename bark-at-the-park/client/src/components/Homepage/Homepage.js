//@ core
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

//@ components
import Navbar from '../Navbar/Navbar';
import Content from '../Content/Content';
import { Route } from 'react-router-dom';

//@ styles
import '../Homepage/Homepage.scss'

class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedPark: [],
            checkedIn: false
        }
        this.selectedPark = this.selectedPark.bind(this);
    }
    parkCheckin = () => {
        const { selectedPark } = this.state
        axios.patch('/checkin/1', {
            park: {
            user: {
                id: 8
            }
            }
        })
        .then(res => console.log('response: ', res))
        .catch(err => console.error(err))

        this.setState({ checkedIn: true})
    }

    selectedPark = (selectedPark) => {

        this.setState({
            selectedPark: selectedPark
        })
    }

    loggued() {

        if (localStorage.getItem('logged') === 'true') {
            return (
                <div className="Homepage">
                    <div className="Homepage__Navbar">
                        <Route path="/homepage" component={Navbar}/>
                    </div>
                    <div className="Homepage__Content">
                        <Content selectPark={this.selectedPark} checkedIn={this.state.checkedIn}/>
                    </div>
                    <div className="Homepage__Check">
                        <div className="Homepage__Check-text" onClick={this.parkCheckin}>
                            {
                                this.state.checkedIn ?
                                    'check out' : 'check in'
                            }
                     
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