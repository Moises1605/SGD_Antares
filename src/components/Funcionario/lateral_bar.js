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
	    <div style={{
		height:"100vh",
		position:"relative"
	    }}>
		<div style={{height:"22vh"}}></div>
		<div>	
		    <Navbar variant="light" bg="light">
			<Navbar.Brand><Image src="" /></Navbar.Brand>
			<Nav className="flex-column" onSelect={this.props.onClick}>
			    <Nav.Item>Menu</Nav.Item>	
			    <Nav.Item>	
				<Nav.Link
				    eventKey="1"
				>Agendamentos</Nav.Link>    
			    </Nav.Item>	    
			    <NavDropdown title="Gerir Bolsistas">
				<NavDropdown.Item
				    eventKey="2"
				>Cadastrar Bolsista</NavDropdown.Item>	
				<NavDropdown.Item
				    eventKey="3"
				>Ver Bolsistas</NavDropdown.Item>
			    </NavDropdown>
			    <NavDropdown title="Gerir Funcionário" >
				<NavDropdown.Item
				    eventKey="4"
				>Cadastrar Funcionário</NavDropdown.Item>
				<NavDropdown.Item
				    eventKey="5"
				>Ver Funcionários</NavDropdown.Item>
			    </NavDropdown>
			    <Nav.Item>
				<Nav.Link 
				    eventKey="6"
				>Horário dos Bolsistas</Nav.Link>
			    </Nav.Item>
			    <Nav.Item>	    
				<Nav.Link
				    eventKey="7"
				>Nova Atividade</Nav.Link>
			    </Nav.Item>
			    <Nav.Item>	    
				<Nav.Link
				    eventKey="8"
				>Relatório de Visitas</Nav.Link>
			    </Nav.Item>
			    <Nav.Item>
				<Button 
					href = '/login'
				    variant="outline-dark"
				    block
				    style={{
					marginTop: "20vh"
				    }}
				 >Encerrar Sessão</Button>
			    </Nav.Item>
			</Nav>
		    </Navbar>
		    </div>
	    </div>
	);
    }
}


export default LateralBar;
