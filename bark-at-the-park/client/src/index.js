import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './index.scss'

ReactDOM.render(
    <Router>
        <Route exact path="/" component={App} />
    </Router>
    , document.getElementById('root'));