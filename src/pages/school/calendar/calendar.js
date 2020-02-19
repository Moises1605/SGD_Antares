import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import './style.css';
import ptBr from '@fullcalendar/core/locales/pt-br'
import { formatDate } from '@fullcalendar/core'
import Agendamento from '../visit/agendamento'
import { Modal}  from 'react-bootstrap';


export default class Calendar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      control: false,
      date1: 'falhou'
    }
  }

  componentDidMount(){
    // this.setState({control:'false'});
  }

  handleDateClick = (arg) => { // bind with an arrow function
    var date = formatDate(arg.dateStr, {
      month: 'numeric',
      year: 'numeric',
      day: 'numeric',
      locale: 'pt-br'
    })
    this.setState({control: true,date1: date})
  }


  render() {
    return (
        <div>
          <Modal
                size="lg"
                show={this.state.control}
                onHide={() => this.setState({ control: false })}
                aria-labelledby="example-modal-sizes-title-lg"
                id='modal'
            >
                <Modal.Header closeButton id='header'>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Agendamento de visita
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Agendamento date2 = {`${this.state.date1}`}/>
                </Modal.Body>
            </Modal>
          <FullCalendar
            weekends={false} 
          
            dateClick={this.handleDateClick} 

            locale = {ptBr} id='calendar' 

            defaultView="dayGridMonth" 

            height = {600}
            
            columnHeaderFormat = {{weekday: 'long' }}
            
            plugins={[ dayGridPlugin, interactionPlugin ]}         
          />
        </div>
    )
  }

}