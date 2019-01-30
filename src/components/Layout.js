import Header from './Header'
import Footer from './Footer'
import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'

class Layout extends Component {
	constructor(props) {
	    super(props);
	    this.state = {}
	    this.state.isLoggedin = false
	    if(localStorage.getItem("accesstoken"))
      		this.state.isLoggedin = true
      	else
      		this.state.isLoggedin = false
  	}
  	componentWillMount() {
    	// will trigger the callback function whenever a new Route renders a component(as long as this component stays mounted as routes change)
	    this.props.history.listen(() => {
	      // view new URL
	      // console.log('New URL', this.props.history.location.pathname);
			if(localStorage.getItem("accesstoken"))
				this.setState({isLoggedin:true})
	      		// this.state.isLoggedin = true
	      	else
	      		this.setState({isLoggedin:false})
		    
	    });

  	}
    render() {
    	if (this.state.isLoggedin) {
	        return (
	            <div>
	                <Header />
	                {this.props.children}
	                <Footer />
	            </div>
	        )
    	}
    	else {
    		return (
	            <div>
	                
	                {this.props.children}
	                
	            </div>
	        )
    	}
    }
}
export default withRouter(Layout)