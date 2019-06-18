//@ core
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//@ components
import App from './components';

//@ styles
import './index.scss'

ReactDOM.render(
    <Router>
        <App/>
    </Router>
, document.getElementById('root'));