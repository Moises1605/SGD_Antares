import React, {Component} from 'react';
import {Container,Row,Col,Button,Tabs,Tab,Card } from 'react-bootstrap'; 
import api from "../../services/api";
import Visits from "./visits.js";
import "./tela_agendamentos.css";

class TelaAgendamento extends Component{

    constructor(){
	super();
	this.state = {
		visits:[
			{
				agendamento: "25/02",
				Responsavel: "Ana",
				horario: "09:30",
				status: "0",
				numAlunos: "40",
				nome:"Colégio Rosa Maria"
			  },
			  {
				agendamento: "20/02",
				Responsavel: "Samuel",
				horario: "11:30",
				status: "1",
				numAlunos: "40",
				nome: "Colégio Asas"
			  },
			  {
				agendamento: "25/09",
				Responsavel: "Alice",
				horario: "15:30",
				status: "2",
				numAlunos: "40",
				nome: "Colégio Bilac"
			  },
			  {
				agendamento: "25/02",
				Responsavel: "Ana",
				horario: "09:30",
				status: "0",
				numAlunos: "40",
				nome:" Colégio Adonai"
			  },
			  {
				agendamento: "25/02",
				Responsavel: "Ana",
				horario: "09:30",
				status: "0",
				numAlunos: "40",
				nome:" Colégio AAAAAAAAA"
			  },
		],
	    pendingVisits: [],
		confirmedVisits: [],
		canceledVisits:[],
		activeScreen: 0,
		action:["Confirmar visita","Cancelar visita","Visitar realizada?","descancelar visita"]
	};
	this.handleSelect = this.handleSelect.bind(this);
    }

	controlConfirm(visit){
		alert(visit.nome + 1);
		visit.status = 1;
		api.post("/confirmarVisita",visit);
	}

	controlCancel(visit){
		alert(visit.nome + 3);
		visit.status = 3;
		api.post("/cancelarVisita",visit);
	}

	controlRealized(visit){
		alert(visit.nome + 2);
		visit.status = 2;
		api.post("/visitaRealizada",visit);
	}

	controlDesCancel(visit){
		alert(visit.nome + 0);
		visit.status = 0;
		api.post("/descancelarVisita",visit);
	}

    handleSelect(eventKey){
		this.setState({activeScreen: eventKey});
    }

    async componentDidMount(){
		//const response = await api.post("/agendamentos");
		//this.setState({visits:response.data});
		var pendingAux = this.state.visits.filter((obj) => obj.status == 0);
		var confirmAux = this.state.visits.filter((obj) => obj.status == 1);
		var canceledAux = this.state.visits.filter((obj) => obj.status == 3);
		this.setState({pendingVisits:pendingAux, confirmedVisits:confirmAux, canceledVisits:canceledAux});
    }

    render(){
	return(
	    <div>
		<h3>
		    Gerenciar Agendamentos
		</h3>
		<div>
			<Tabs 
				id = "visits"
				activeKey={this.state.activeScreen}
				defaultActiveKey="0"
				onSelect={this.handleSelect}
		    >
				<Tab eventKey="0" title="Pendentes">
				{this.state.pendingVisits.map((item) => (
					<Card id = "pending" bg="light" >
						<Card.Header>{item.nome}</Card.Header>
						<Card.Body>
							<Card.Text>
								Data Prevista: {item.agendamento}{" "}
								Nº Visitantes: {item.numAlunos}{" "}
								Responsável: {item.Responsavel}{" "}
								Horário: {item.horario}
								<div id = "visitsBuntton">
									<Button onClick = {() => this.controlConfirm(item)} id = "confirmButton" variant = "success">Confirmar visita</Button>
									<Button onClick = {() => this.controlCancel(item)} variant = "danger">Cancelar</Button>
								</div>
							</Card.Text>
						</Card.Body>
					</Card>
				))}
				</Tab>
				<Tab eventKey="1" title="Confirmados">
				{this.state.confirmedVisits.map((item) => (
					<Card id = "confirmed" bg="light" >
						<Card.Header>{item.nome}</Card.Header>
						<Card.Body>
							<Card.Text>
								Data Prevista: {item.agendamento}<br />
								Nº Visitantes: {item.numAlunos}
								<Button onClick = {() => this.controlRealized(item)} id = "realButton" variant = "warning">Visita realizada</Button>
							</Card.Text>
						</Card.Body>
						</Card>
				))}
				</Tab>
				<Tab eventKey="2" title="Cancelados">
				{this.state.canceledVisits.map((item) => (
					<Card id = "canceled" bg="light" >
						<Card.Header>{item.nome}</Card.Header>
						<Card.Body>
							<Card.Text>
								Data Prevista: {item.agendamento}<br />
								Nº Visitantes: {item.numAlunos}
								<Button onClick = {() => this.controlDesCancel(item)} id = "descancelButton" variant = "warning">Descancelar visita</Button>
							</Card.Text>
						</Card.Body>
						</Card>
				))}
				</Tab>
		    </Tabs>
		</div>
	    </div>
	);
    }
}


export default TelaAgendamento;
