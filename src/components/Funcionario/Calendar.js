import React, {Component} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import ptBr from '@fullcalendar/core/locales/pt-br';
import interactionPlugin from '@fullcalendar/interaction';
import { formatDate } from '@fullcalendar/core'
import './Calendar.css';
import{Container,Row,Col,Card,Button} from 'react-bootstrap';
import api from "../../services/api"

export default class DemoApp extends React.Component { 

	constructor(props){
		super(props);
		this.state = {
			idScholarship:"",
			schedule: [],
			dayStart: "",
			hourStart: "",
			dayEnd:"",
			hourEnd:"",
			scholarships: [/*{nome:"Moises",id:"1"},{nome:"Lucas",id:"2"},{nome:"Fernanda",id:"3"}*/],
			week: ["Seg","Ter","Qua","Qui","Sex"],
			show:false
		}
	} 

	//Carrega os bolsistas que não tem horários
	componentDidMount(){
		const response = api.post("/retonarBolsistas");
		this.setState({scholarships: response.data});
	}

	//Converte para o formato utilizado
	controlWeekday(day){
		if(day == "seg")return 1;
		if(day == "ter")return 2;
		if(day == "qua")return 3;
		if(day == "qui")return 4;
		if(day == "sex")return 5;
	}

	//pega o horário selecionado
	handleSelectDate = (arg) => {
		var dateStart = formatDate(arg.start, {
			hour: 'numeric',
			minute: 'numeric',
			weekday: 'short',
			locale: 'pt-br'
		})
		var dateEnd = formatDate(arg.end, {
			hour: 'numeric',
			minute: 'numeric',
			weekday: 'short',
			locale: 'pt-br'
		})
		var schedule = {
			day: this.controlWeekday(dateStart.substring(0,3)),
			hourStart: dateStart.substring(6,12),
			hourEnd: dateEnd.substring(6,12)
		}
		this.state.schedule.push(schedule);
		var scheduleAux = this.state.schedule;
		this.setState({schedule: scheduleAux});
	}

	handleEditScholarship(scholarship){
		var id = scholarship.id;
		this.setState({show: true,idScholarship: id});
	}

	handleSubmit(){
		alert(this.state.idScholarship);
		api.post("/adicionarHorario",{shededule: this.state.schedule,idScholarship: this.state.idScholarship});
	}

    render() {
		return (
			<Container fluid >
				<Row><h5>Escolha um bolsista para editar os seus horários</h5></Row>
				<Row>
				<Col md ='6'>
				{this.state.show && (
					<div>
					<FullCalendar 
						defaultView="timeGridWeek" 
						locale ={ptBr} 
						plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin]}
						editable={true}
						weekends={false}
						columnHeaderFormat= {{weekday:'short'}}
						slotLabelFormat={{hour:'numeric', minute:'2-digit'}}
						header={{left: '', center: '', right: ''}}
						allDaySlot={false}
						height={400}
						maxTime='20:30:00'
						minTime='08:00:00'
						selectable = {true}
						select = {this.handleSelectDate}
					/>
					<div id = "eventSchedule"><Button  variant = "outline-success"  onClick={() => this.handleSubmit()}>Salvar</Button></div>
					</div>
				)}
				</Col>
				<Col>
				<h5>Bolsistas</h5>
                    {this.state.scholarships.map(type => (
                        <Card key = {type.nome} id = "itemList">
                            <Card.Body>
                                {type.nome}
                                <div id = "eventButton"><Button  variant = "outline-danger" size = 'sm' onClick={() => this.handleEditScholarship(type)}>Editar</Button></div>
                            </Card.Body>
                        </Card>
                    ))}
				</Col>
				<Col md = '3'>
					<h5>Horários</h5>
                    {this.state.schedule.map(type => (
                            <Card key = {type.nome} id = "itemList">
                                <Card.Body>
                                    {this.state.week[type.day-1]}{" "}{type.hourStart}{"-"}{type.hourEnd}
                                </Card.Body>
                            </Card>
                    ))}
				</Col>
				</Row>
			</Container>
		);
    }
}
