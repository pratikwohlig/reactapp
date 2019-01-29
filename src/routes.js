import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './components/app';
import MainPage from './components/Home';
import Page2 from './components/Page2';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
	<Router history = {browserHistory}>
  		<Route path="/" component={App}>
    		<IndexRoute component={MainPage} />
    		<Route path="/page2" component={Page2} />
  		</Route>
  	</Router>
);