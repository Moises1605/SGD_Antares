import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Card
} from 'react-bootstrap'; 


class Visits extends Component{

    constructor(){
	super();
	
	this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){


    }

    render(){

	return(
	    <a style={{cursor: "pointer"}} onClick={this.handleClick}>
		<Card bg="light" >
		    <Card.Header>{this.props.nome}</Card.Header>
		    <Card.Body>
			<Card.Text>
			    Data Prevista: {this.props.date}<br />
			    Nº Visitantes: {this.props.number}
			</Card.Text>
		    </Card.Body>
		</Card>
	    </a>
	);

    }

}




export default Visits;
