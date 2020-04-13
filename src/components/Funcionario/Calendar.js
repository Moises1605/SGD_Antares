import React, {Component} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import ptBr from '@fullcalendar/core/locales/pt-br';
import interactionPlugin from '@fullcalendar/interaction';
import { formatDate } from '@fullcalendar/core'
import './Calendar.css';
import{Container,Row,Col} from 'react-bootstrap';
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
			scholarships: [],
			week: ["Segunda","Terça","Quarta","Quinta","Sexta"],
		}
	} 

	componentDidMount(){
		const response = api.post("/retonarBolsistas");
		this.setState({scholarships: response.data});
	}

	controlWeekday(day){
		if(day == "seg")return 1;
		if(day == "ter")return 2;
		if(day == "qua")return 3;
		if(day == "qui")return 4;
		if(day == "sex")return 5;
	}

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
			dayStartAux: this.controlWeekday(dateStart.substring(0,3)),
			hourStartAux: dateStart.substring(6,12),
			dayEndAux: this.controlWeekday(dateEnd.substring(0,3)),
			hourEndAux: dateEnd.substring(6,12)
		}
		this.state.schedule.push(schedule);
		console.log(this.state.schedule); 
	}

	handleSubmit(){
		api.post("/adicionarHorario",this.state.schedule);
	}

    render() {
		return (
			<Container fluid >
				<Row><h3>Horário de Trabalho dos Bolsistas</h3></Row>
				<Row>
				<FullCalendar 
				defaultView="timeGridWeek" 
				locale ={ptBr} 
				plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin]}
				editable={true}
				weekends={false}
				columnHeaderFormat= {{weekday:'long'}}
				slotLabelFormat={{hour:'numeric', minute:'2-digit'}}
				header={{left: '', center: '', right: ''}}
				allDaySlot={false}
				height={450}
				maxTime='20:30:00'
				minTime='08:00:00'
				selectable = {true}
				select = {this.handleSelectDate}
				events = {[
				{
				daysOfWeek: [1,5],
				startTime: '10:00',
				endTime: '16:00',
				rendering: 'background'
				}
				]}
				/>
				</Row>
			</Container>
		);
    }
}
