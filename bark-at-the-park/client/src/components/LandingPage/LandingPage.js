//@ componentes
import React, { useLayoutEffect, useEffect } from 'react'
// import Login from '../Login/Login'; 
import Login from '../Login/LoginReducer'; 
import { useSelector } from 'react-redux';


import { withRouter } from 'react-router';

//@ styles
import './LandingPage.scss';


const LandingPage = function (props) {
  const user = useSelector(state => state);

  useEffect(() => {
    console.log('effect',user)
    if (user && user.logged) {
      props.history.push('/homepage')
    }
  })
  useLayoutEffect(()=> {
    // let login = localStorage.getItem('logged')

    // if (user.logged) {
    //   props.history.push('/homepage')
    // } 
  },[]);

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