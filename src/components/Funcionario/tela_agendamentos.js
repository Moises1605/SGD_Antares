import React, {Component} from 'react';
import {Container,Row,Col,Button,Tabs,Tab,Card } from 'react-bootstrap'; 
import api from "../../services/api";
import Visits from "./visits.js";
import "./tela_agendamentos.css";
import SweetAlert from "sweetalert2-react";

class TelaAgendamento extends Component{

    constructor(){
	super();
	this.state = {
		visits:[],
	    pendingVisits: [],
		confirmedVisits: [],
		canceledVisits:[],
		activeScreen: 0,
		action:["Confirmar visita","Cancelar visita","Visitar realizada?","descancelar visita"],
		show:false
	};
	this.handleSelect = this.handleSelect.bind(this);
    }

	controlConfirm(visit){
		visit.status = 1;
		api.post("/cancelaConfirmaAgendamento",visit);
		this.setState({ show: true });
	}

	controlCancel(visit){
		visit.status = 3;
		api.post("/cancelaConfirmaAgendamento",visit);
		this.setState({ show: true });
	}

	controlRealized(visit){
		visit.status = 2;
		api.post("/cancelaConfirmaAgendamento",visit);
		this.setState({ show: true });
	}

	controlDesCancel(visit){
		visit.status = 0;
		api.post("/cancelaConfirmaAgendamento",visit);
		this.setState({ show: true });
	}

    handleSelect(eventKey){
		this.setState({activeScreen: eventKey});
    }

    async componentDidMount(){
		const response = await api.post("/retornaAgendamentos");
		this.setState({visits:response.data});
		var pendingAux = this.state.visits.filter((obj) => obj.status == 0);
		var confirmAux = this.state.visits.filter((obj) => obj.status == 1);
		var canceledAux = this.state.visits.filter((obj) => obj.status == 3);
		this.setState({pendingVisits:pendingAux, confirmedVisits:confirmAux, canceledVisits:canceledAux});
    }

    render(){
	return(
	    <div>
		<SweetAlert
          show={this.state.show}
          title="Sucesso"
          text="recarregue a página, por favor"
          onConfirm={() => this.setState({ show: false })}
        />
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
								Horário: {item.hora}
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
								Horário: {item.hora}
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
								Horário: {item.hora}
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
