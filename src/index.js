import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import ReactDOM from "react-dom";
import { Router, hashHistory as history } from 'react-router';
// import routes from './routes';
import App from './components/app'


ReactDOM.render(<App />, document.getElementById('root'));