import React, {Component} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import ptBr from '@fullcalendar/core/locales/pt-br';
import interactionPlugin from '@fullcalendar/interaction';
import { formatDate } from '@fullcalendar/core'
import './Calendar.css';
import{Container,Row,Col,Card,Button,Tab,Tabs} from 'react-bootstrap';
import api from "../../services/api"
import RemoveSchedule from "./removeSchedule";
import SweetAlert from 'sweetalert2-react';

export default class DemoApp extends React.Component { 

	constructor(props){
		super(props);
		this.state = {
			idScholarship:"",
			schedule: [],
			dayStart: "",
			inicioPeriodo: "",
			dayEnd:"",
			hourEnd:"",
			scholarships: [/*{nome:"Moises",id:"1"},{nome:"Lucas",id:"2"},{nome:"Fernanda",id:"3"}*/],
			scholarshipsAux:[],
			week: ["Seg","Ter","Qua","Qui","Sex"],
			show:false,
			scheduleScholarship:[],
			schedulesEdit:[],
			showSuccess:false,
		}

		this.filterScholarships = this.filterScholarships.bind(this);
		this.scholarshipsWithoutSchedule = this.scholarshipsWithoutSchedule.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
	} 

	filterScholarships(element,index,array){	
		if (!this.state.scheduleScholarship.includes(element.idBolsista)) {
			this.state.scheduleScholarship.push(element.idBolsista);
		}
	}

	scholarshipsWithoutSchedule(element,index,array){
		if (!this.state.scheduleScholarship.includes(element.idBolsista)) {
			this.state.scholarships.push(element);
		}
		else{
			this.state.scholarshipsAux.push(element);
		}
	}

	removeSchedule(index){
		this.state.schedule.splice(index,1);
		this.setState({schedule:this.state.schedule});
		//this.setState({schedule:aux});
	}

	//Carrega os bolsistas que não tem horários
	async componentDidMount(){
		const response2 = await api.post('/listarHorarioBolsistas');
		response2.data.forEach(this.filterScholarships);
		this.setState({schedulesEdit:response2.data});
		console.log(this.state.schedulesEdit);
		const response = await api.post("/listarDadosBolsistas");
		response.data.forEach(this.scholarshipsWithoutSchedule);
		this.setState({scholarships:this.state.scholarships});
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
			semana: this.controlWeekday(dateStart.substring(0,3)),
			inicioPeriodo: dateStart.substring(6,12),
			fimPeriodo: dateEnd.substring(6,12)
		}
		this.state.schedule.push(schedule);
		var scheduleAux = this.state.schedule;
		this.setState({schedule: scheduleAux});
	}

	handleEditScholarship(scholarship){
		var id = scholarship.idBolsista;
		this.setState({show: true,idScholarship: id});
	}

	handleSelect(eventKey){
		this.setState({activeScreen: eventKey});
    }

	handleSubmit(){
		alert(this.state.idScholarship);
		api.post("/addVariosHorariosBolsista",{schedule: this.state.schedule,idScholarschip: this.state.idScholarship});
		this.setState({showSuccess:true});
	}

    render() {
		return (
			<Container fluid >
			 <SweetAlert
                    show={this.state.showSuccess}
                    title="Sucesso"
                    text="Horário cadastrada, recarregue a página por favor"
                    onConfirm={() => this.setState({ showSuccess: false })}
                />
			<Tabs 
				id = "visits"
				activeKey={this.state.activeScreen}
				defaultActiveKey="0"
				onSelect={this.handleSelect}
		    >
			<Tab eventKey="0" title="Edição">
				<Row><h5>Escolha um bolsista para cadastrar os seus horários</h5></Row>
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
					<div id = "eventSchedule"><Button disabled = {this.state.schedule.length == 0} variant = "outline-success"  onClick={this.handleSubmit}>Salvar</Button></div>
					</div>
				)}
				</Col>
				<Col style={{ height: "60vh", overflowY: "auto", }}>
				<h5>Bolsistas</h5>
                    {this.state.scholarships.map(type => (
                        <Card key = {type.nome} id = "itemList">
                            <Card.Body>
                                {type.nome}{" "}{type.surname}
                                <div id = "eventButton"><Button  variant = "outline-primary" size = 'sm' onClick={() => this.handleEditScholarship(type)}>Editar</Button></div>
                            </Card.Body>
                        </Card>
                    ))}
				</Col>
				<Col style={{ height: "60vh", overflowY: "auto", }} md = '3'>
					<h5>Horários</h5>
                    {this.state.schedule.map(type => (
                            <Card key = {type.nome} id = "itemList">
                                <Card.Body>
                                    {this.state.week[type.semana-1]}{" "}{type.inicioPeriodo}{"-"}{type.fimPeriodo}
									<div id = "eventButton"><Button  variant = "outline-danger" size = 'sm' onClick={() => this.removeSchedule(this.state.schedule.indexOf(type))}>Excluir</Button></div>
                                </Card.Body>
                            </Card>
                    ))}
				</Col>
				</Row> 
			</Tab>
			<Tab eventKey="1" title="Exclusão">
				<RemoveSchedule schedules = {this.state.schedulesEdit} scholarships = {this.state.scholarshipsAux}/>
			</Tab>
			</Tabs>
			</Container>
		);
    }
}
