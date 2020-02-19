import React, {Component} from 'react';
import {
    Button,
    Container,
    Col,
    Row,
    Image,
    Navbar,
    Nav,
    NavDropdown
} from 'react-bootstrap';
class LateralBar extends Component{

    constructor(props){
	super(props);
	this.state = {
	    user : "",
	};

    }



    render(){
	console.log();
	return(
	    <div id="bar">
		<div id="null1"></div>
		<div>
			<Navbar variant="light" bg="light">
			<Navbar.Brand><Image src="" /></Navbar.Brand>
			<Nav className="flex-column" onSelect={this.props.onClick}>
			    <Nav.Item>Menu</Nav.Item>	
			    <Nav.Item>	
				<Nav.Link
				    eventKey="1"
				>Relatórios
				</Nav.Link> 
				<Nav.Link
				    eventKey="2"
				>Gerir Funcionários
				</Nav.Link>     
			    <Nav.Link
				    eventKey="3"
				>Gerir Bolsistas
				</Nav.Link>   
				<Nav.Link
				    eventKey="4"
				>Gerir Escolas
				</Nav.Link>
				<Nav.Link
				    eventKey="5"
				>Backup
				</Nav.Link>   
				<br/>
				<Button href = '/login' id='encerrar'variant="outline-dark">Encerrar Sessão</Button>   
			    </Nav.Item>
			</Nav>
		    </Navbar>
			
		    </div>
	    	</div>
	);
    }
}


export default LateralBar;
