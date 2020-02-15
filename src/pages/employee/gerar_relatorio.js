import React,{Component} from 'react';
import GenModal from './modal_relatorio.js';
import RowsTable from './rows_tables.js';
import {
    Container,
    Row,
    Col,
    InputGroup,
    Dropdown,
    Button,
    FormControl,
    Table
} from 'react-bootstrap';

class GenRelatorio extends Component{

    
    constructor(){
	super();
	this.state = {
	    search: "",
	    rows:[],
	    modalShow: false
	};
	this.handleChange = this.handleChange.bind(this);
	this.handleSearch = this.handleSearch.bind(this);
    }

    
    handleChange(event){
	this.setState({search: event.target.value});
    }
    

    handleSearch(){



    }

    componentDidMount(){
	this.setState({rows: [
	    <RowsTable handleClick={this.handleClick} relatorio="@3423" numVisitas="321" data="23/23/32" />
	]});
    }


    render(){

	return (
	    <Container fluid >
		<Row>
		    <Col>
			<h3 style={{textAlign: "left"}}>Relatórios</h3>
		    </Col>
		    <Col></Col>
		</Row>
		<Row>
		    <div style={{height: "3vh"}}></div>
		</Row>
		<Row>
		    <Col>
			<Dropdown>
			    <Dropdown.Toggle
				variant="outline-secondary"
			    >Ordenar por</Dropdown.Toggle>
			    <Dropdown.Menu>
				<Dropdown.Item>Nome</Dropdown.Item>
				<Dropdown.Item>Data</Dropdown.Item>
				<Dropdown.Item>Nº de Visitantes</Dropdown.Item>
			    </Dropdown.Menu>
			</Dropdown>
		    </Col>
		    <Col></Col>
		    <Col>
			<InputGroup>
			    <FormControl 
				placeholder="Procurar..."
				onChange={this.handleChange}
				    value={this.state.search}
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
			    height: "52vh",
			    overflowY: "auto"
			}}>
			    <Table bordered hover responsive striped >
				<thead>
				    <tr>
					<th>Relatórios</th>
					<th>Nº de Visitantes</th>
					<th>Data</th>
				    </tr>
				</thead>
				<tbody>
				    {this.state.rows}
				</tbody>
			    </Table>
			</div>
		    </Col>
		    <Col xs={1}></Col>
		</Row>
		<Row>
		    <div style={{height: "3vh"}}></div>
		</Row>
			    
	    </Container>
    	);


    }


}

export default GenRelatorio;
