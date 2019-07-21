//@ componentes
import React, { useEffect } from 'react'
// import Login from '../Login/Login'; 
import Login from '../Login/LoginReducer'; 
import axios from 'axios';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import './LandingPage.scss';

const LandingPage = function (props) {
  const user = useSelector(state => state);

  useEffect(() => {
    if (user && user.logged) {
      props.history.push('/homepage')
    }

    axios.get('/parks')
    .then(response => { 
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
  })

  return (
      <div className="LandingPage">
        <h1 className="LandingPage__Header">Welcome to Bark at the Park</h1>
        <h2 className="LandingPage__Subheader">A place where you can meet other pet owners at parks while your dog is running around</h2>
        <div className="LandingPage__Content">
          <div className="LandingPage__Content-Image">
            <img src="../../art.png" alt="Smiley face" height="400"></img>
          </div>
          <div className="LandingPage__Content-Login">
            <Login />
          </div>
        </div>
      </div>
  )
}

export default withRouter(LandingPage)