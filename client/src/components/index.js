//@ core
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//@ components
import LandingPage from './LandingPage/LandingPage';
import Homepage from './Homepage/Homepage';
import Profile from './Profile/Profile'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/homepage" component={Homepage}/>
      <Route path="/profile" component={Profile}/>
    </Switch>
  );
}

export default App;

