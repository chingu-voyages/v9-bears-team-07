//@ core
import React, { useState } from 'react';
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
  // const [ null, setSelectedPark ] = useState([]);
  let [ checkedIn, setCheckIn ] = useState(false);
  const logged = useSelector(state => state);

  function parkCheckin(option) {
    // option shoud be Checkin or Checkout
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

  function selectPark(selectedPark) {
    // setSelectedPark(selectedPark);
  }

  if (logged) {
    return (
      <div className="Homepage">
        <div className="Homepage__Navbar">
          <Route path="/homepage" component={Navbar} />
        </div>
        <div className="Homepage__Content">
          <Content selectPark={selectPark} checkedIn={checkedIn} parkCheckin={parkCheckin} />
        </div>
      </div>
    )
  } else {
    return props.history.push('/')
  }
}

export default withRouter(Homepage)