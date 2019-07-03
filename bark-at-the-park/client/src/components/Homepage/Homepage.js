//@ core
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { useSelector } from 'react-redux';
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

    selector() {
      const logged = useSelector(state => state);
    }

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

      this.setState({ checkedIn: true })
    }

    parkCheckout = () => {
        this.setState( { checkedIn: false})
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
                        <div>
                            {
                                this.state.checkedIn ?
                                    <div 
                                        onClick={this.parkCheckout}
                                        className="Homepage__Check-text">Checkout</div> 
                                    : 
                                    <div 
                                        className="Homepage__Check-text"
                                        onClick={this.parkCheckin}>Checkin</div> 
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