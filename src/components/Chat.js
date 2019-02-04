import React, {Component} from "react";
import $ from 'jquery';
import './chat.scss';
import logo from '../static/img/launcher_icon.png';
import WOW from "wowjs";
import { Link, withRouter } from 'react-router-dom';

class Chat extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {};
	    this.state.showChat = false;
	    this.showChatwindow = this.showChatwindow.bind(this);
	}
	componentDidMount() {
	    const wow = new WOW.WOW();
	    wow.init();
	}
	showChatwindow() {

		this.setState({showChat: true});
		$('#chat_window_1').slideDown("slow", function() {
            // Animation complete.
            
        });
	}
    render(){
        return [<div id="chat_window_1"  key={1} >
	        <div className="panel panel-primary " id="chat_panel" >
	            <div className="panel-heading container-fluid" id="accordion">

	            </div>
	            <div className="container-fluid" >
                	<div className="col-sm-12"> 
                    	<div className="login">

                    	</div>
                    </div>
                </div>
                <div className="container-fluid chatbody" >
	                <div className="tab-content chattab-content">
	                    
	                    <div className="tab-pane active row" id="chattab" >
	                    	
	                        <div className="panel-body" > 

	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>,
	    <div id="chat-circle" className="btn btn-raised" onClick = {this.showChatwindow}  key={2}>
		    
		    <img className="clickImage chatbotimg doneLoading" id="clickImage" src={logo} /> 
		</div> 
		]       
    }
}
export default Chat