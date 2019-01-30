import React, { Component } from 'react'
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { HashRouter as Router, Route, Link, IndexRoute, hashHistory, browserHistory, Switch } from 'react-router-dom'
import Home from '../components/Home';
import Page2 from '../components/Page2';
import NoMatch from '../components/NoMatch';
import Layout from '../components/Layout';

class App extends Component {

  render() {
    return (
      		<Router history={hashHistory}>
 				<Layout>
 				<Switch>
			      	<Route exact path="/" component={Home} />
			        <Route path='/address' component={Page2} />
			        <Route path='*' exact={true} component={NoMatch} />
	    		</Switch>
	    		</Layout>
      		</Router>
    )
  }
}
export default (App)