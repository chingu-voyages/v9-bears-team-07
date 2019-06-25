//@ core
import React from 'react';

//@ componentes
import Login from '../Login/Login'; 

//@ styles
import './LandingPage.scss';

export default function LandingPage() {
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