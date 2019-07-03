//@ core
import React, { Component, useState } from 'react';
import { withRouter } from 'react-router';
import { useSelector } from 'react-redux';
import axios from 'axios';

//@ components
import Navbar from '../Navbar/Navbar';
import Content from '../Content/Content';
import { Route } from 'react-router-dom';

//@ styles
import '../Homepage/Homepage.scss'

const Homepage = (props) => {
  const [ selectedPark, setSelectedPark ] = useState([]);
  let [ checkedIn, setCheckIn ] = useState(false);
  const logged = useSelector(state => state);

  function parkCheckin() {
    axios.patch('/checkin/1', {
      park: {
        user: {
          id: 8
        }
      }
    })
    .then(res => console.log('response: ', res))
    .catch(err => console.error(err))

    setCheckIn(checkedIn = true);
  }

  function parkCheckout() {
    setCheckIn(checkedIn = false);
  }

  function selectPark(selectedPark) {
    setSelectedPark(selectedPark);
  }

  if (logged) {
    return (
      <div className="Homepage">
        <div className="Homepage__Navbar">
          <Route path="/homepage" component={Navbar} />
        </div>
        <div className="Homepage__Content">
          <Content selectPark={selectPark} checkedIn={this.state.checkedIn} />
        </div>
        <div className="Homepage__Check">
          <div>
            {
              this.state.checkedIn ?
                <div
                  onClick={parkCheckout}
                  className="Homepage__Check-text">Checkout</div>
                :
                <div
                  className="Homepage__Check-text"
                  onClick={parkCheckin}>Checkin</div>
            }
          </div>
        </div>
      </div>
    )
  } else {
    console.log(props)
    return props.history.push('/')
  }
}

export default withRouter(Homepage)