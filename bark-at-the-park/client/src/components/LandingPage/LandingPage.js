import React, { Component } from 'react';
import './LandingPage.scss';
import Login from '../Login/Login'
class LandingPage extends Component {
  
  render() {
    return (
      <div className="LandingPage">
        <h1 className="LandingPage__Header">Welcome to Bark at the Park</h1>
        <h2 className="LandingPage__Subheader">A place where you can meet other pet owners at parks while your dog is running around</h2>
        <img className="LandingPage__Image" src="../../art.png" alt="Smiley face" height="400"></img>
        <Login />
        {/* <div>Sign In</div> */}
      </div>
    )
  }
}

export default LandingPage;
