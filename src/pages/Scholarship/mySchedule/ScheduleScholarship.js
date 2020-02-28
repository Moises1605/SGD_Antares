import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin, { TimeGrid } from '@fullcalendar/timegrid';
import './style.css';
import ptBr from '@fullcalendar/core/locales/pt-br'
import { formatDate } from '@fullcalendar/core'
import api  from "../../../services/api"
//import { Modal}  from 'react-bootstrap';

//tela onde o bolsista poderá vê o seu horario de trabalho.
export default class ScheduleScholarship extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      control: false,
      schedules: [],
      idScholarschip: this.props.idScholarschip
    }
  }

  async componentDidMount(){
    var horarioBolsista= api.post("dadosBolsista",this.idScholarschip)
    console.log((await horarioBolsista).data)
  }

  render() {
    return (
        <div>
          <FullCalendar
            //Tira o final de semana 
            weekends={false} 
            //Deixa no hórario do Brasil
            locale = {ptBr} 
            //Como mostrar a informação 
            defaultView = 'timeGridWeek'
            //Tamanho do calendário.
            height = {600}

            header = {{
                left: ' ',
                //center: 'title',
                right: ' '
              }}
            //tirar o slot de all Day
            allDaySlot = {false}
            
            //Mostrar somente os dias da semana por extenso.
            columnHeaderFormat = {{
                weekday: 'long' 
            }}

            //Intervalo da funcionamento
            minTime = '08:30:00'
            maxTime = '22:30:00' 
            
            //Horários de trabalho
            // events = {[
            //     {
            //         daysOfWeek: [ 1 ], // Thursday, Friday
            //         startTime: '09:00', // 10am
            //         endTime: '16:00', // 4pm
            //         rendering: 'background'

            //     },
            //   ]}
            
            events = {this.state.schedules.map(item =>(
              {
                daysOfWeek: [ item.day ], // Thursday, Friday
                startTime: item.start, // 10am
                endTime: item.end, // 4pm
                rendering: 'background'
              } 
            ))}
            
             
            plugins={[ dayGridPlugin, timeGridPlugin ]}         
          />
        </div>
    )
  }

}