import React, {Component} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import ptBr from '@fullcalendar/core/locales/pt-br';
import interactionPlugin from '@fullcalendar/interaction';
import './Calendar.css';
import{
    Container,
    Row,
    Col
} from 'react-bootstrap';
export default class DemoApp extends React.Component {

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
	    events = {[
	    {
		daysOfWeek: [3,5],
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
