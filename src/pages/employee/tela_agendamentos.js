import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    Tabs,
    Tab 
} from 'react-bootstrap'; 
import Visits from "./visits.js";

class TelaAgendamento extends Component{

    constructor(){
	super();
	this.state = {
	    pendingVisits: [],
	    confirmedVisits: [],
	    activeScreen: 0
	};
	this.handleSelect = this.handleSelect.bind(this);
    }



    handleSelect(eventKey){
	this.setState({activeScreen: eventKey});
    }

    componentDidMount(){
	/*Calls for All pending and confirmed visits*/
    }

    render(){
	return(
	    <div>
		<h3>
		    Agendamentos
		</h3>
		<div>
		    <Tabs 
			activeKey={this.state.activeScreen}
			defaultActiveKey="0"
			onSelect={this.handleSelect}
		    >
			<Tab eventKey="0" title="Pendentes">
			    <Visits nome="Colégio Asas" date="08/23/2012" number="32"/>
			    {this.state.pendingVisits}
			</Tab>
			<Tab eventKey="1" title="Confirmados">
			    {this.state.confirmedVisits}
			</Tab>
		    </Tabs>
		</div>
	    </div>
	);
    }
}


export default TelaAgendamento;
