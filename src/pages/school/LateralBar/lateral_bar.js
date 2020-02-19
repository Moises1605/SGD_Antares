import React, { Component } from 'react';
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
import './style.css'
import ConfirmBack from '../../components/header/confirmBack/confirmBack'


export default class LateralBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: "",
		};

	}



	render() {
		console.log();
		return (
			<div id='a'>
				<div style={{ height: "22vh" }}></div>
				<div>
					<Navbar >
						<Navbar.Brand><Image src="" /></Navbar.Brand>
						<Nav className="flex-column" >
							<Nav.Item>Menu</Nav.Item>
							<Nav.Link className="0" onClick={this.props.onClick} >Agendamento</Nav.Link>
							<Nav.Link className="4" disabled onClick={this.props.onClick}>Meus agendamentos </Nav.Link>
							<Nav.Link className="0" disabled href = '/editarEscola' >Meus dados</Nav.Link>
						</Nav>
					</Navbar>
				</div>
				<div >
					{/* <ConfirmBack/> */}
					<Button href = '/login' id = 'endSession' variant="outline-dark" block>Encerrar Sessão</Button>
				</div>
			</div>
		);
	}
}


