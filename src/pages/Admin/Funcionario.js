import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Dropdown,
    InputGroup,
    FormControl,
    Button,
	Table,
	Modal, 
} from 'react-bootstrap'; 

import CadastroFuncionario from './CadastroFuncionario';
class Funcionario extends Component{

    constructor(){
	super();
	this.state = {
	    rows: [],
		search: "",
		show: false,
	};
	this.handleSearch = this.handleSearch.bind(this);
	this.handleChange = this.handleChange.bind(this);
	this.setControl = this.setControl.bind(this);
    }

    componentDidMount(){
	/*fetch information from the back-end*/
	
    }

    handleSearch(){
	/*Shows the result of the search*/
    }

    handleChange(event){
	this.setState({search: event.target.value});
	}
	
	setControl(event){
		this.setState({show:true});
	}

	handleClose = () => this.setState({show:false});

    render(){
	

	return(
	    <Container fluid >
		<Row>
		    <Col >
			<h3 style={{textAlign: "left"}}>Gerir Funcionários</h3>
		    </Col>
		    <Col>
		    </Col>
		</Row>
		<Row>
		    <div style={{height: "3vh"}}></div>
		</Row>
		<Row>
		    <Col>
			<Dropdown>
			    <Dropdown.Toggle
				variant="outline-secondary"
			    >Ordenar Por</Dropdown.Toggle>

			    <Dropdown.Menu>
				<Dropdown.Item>Nome</Dropdown.Item>
				<Dropdown.Item>CPF</Dropdown.Item>
				<Dropdown.Item>Telefone</Dropdown.Item>
			    </Dropdown.Menu>
			</Dropdown>
		    </Col>
		    <Col></Col>
		    <Col>
			<InputGroup>
			    <FormControl 
				placeholder="Procurar..."
				value={this.state.search}
				onChange={this.handleChange}
			    />
			    <InputGroup.Prepend>
				<Button 
				    variant="outline-secondary"
				    onClick={this.handleSearch}
				>&#128269;</Button>	
			    </InputGroup.Prepend>
			</InputGroup>
		    </Col>
		    <Col xs={1}></Col>
		</Row>
		<Row>
		    <div style={{height: "3vh"}}></div>
		</Row>
		<Row>
		    <Col>
			<div style={{
			    height: "40vh",
			    overflowY: "auto"
			}}>
			    <Table striped bordered hover responsive >
				<thead>
				    <tr>
					<th>#</th>
					<th>Nome</th>
					<th>CPF</th>
					<th>Telefone</th>
				    </tr>
				</thead>
				<tbody>
				<tr >
					<td>a</td>
					<td>a</td>
					<td>a</td>
					<td>a</td>
				    </tr>
					<tr >
					<td>a</td>
					<td>a</td>
					<td>a</td>
					<td>a</td>
				    </tr>
					<tr >
					<td>a</td>
					<td>a</td>
					<td>a</td>
					<td>a</td>
				    </tr>
					<tr >
					<td>a</td>
					<td>a</td>
					<td>a</td>
					<td>a</td>
				    </tr>
					<tr >
					<td>a</td>
					<td>a</td>
					<td>a</td>
					<td>a</td>
				    </tr>
					<tr >
					<td>a</td>
					<td>a</td>
					<td>a</td>
					<td>a</td>
				    </tr>
					<tr >
					<td>a</td>
					<td>a</td>
					<td>a</td>
					<td>a</td>
				    </tr>
				    {this.state.rows}  
				</tbody>
			    </Table>
			</div>
		    </Col>
		    <Col xs={1}></Col>
		</Row>
		<br/>
		<Row>
			<Col xs={9}></Col>
			<Col><Button variant="outline-secondary" block onClick={this.setControl}>Novo Cadastro</Button></Col>
			<Col xs={1}></Col>
		</Row>
		<Row>
		    <Col>
			<div style={{height: "3vh"}}></div>
		    </Col>
		</Row>
		<Modal size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			show={this.state.show} onHide={this.handleClose}>
				<Modal.Header closeButton>
				<Modal.Title>Cadastro de Funcionário</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<CadastroFuncionario/>
					<br/><br/><br/><br/>
				</Modal.Body>
      		</Modal>
	    </Container>		
	);


    }


}



export default Funcionario;
