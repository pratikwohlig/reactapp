import React, {Component} from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super()
    this.state = {}
    this.state.isLoggedin = localStorage.getItem("accesstoken")
    this.state.isLoggedin = true;
  }
  render(){
    return  <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink to="/" className="navbar-brand" >Navbar</NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item ">
                    <NavLink to="/" activeClassName="active">Home <span className="sr-only">(current)</span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/address" activeClassName="active">Page2</NavLink>
                  </li>
                  
                  
                </ul>
              </div>
            </nav>
    
  }
}
export default Header