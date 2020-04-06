import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin, { TimeGrid } from '@fullcalendar/timegrid';
import './style.css';
import ptBr from '@fullcalendar/core/locales/pt-br'
import Calendario from '../../Home/Calendar'
//import { formatDate } from '@fullcalendar/core'


export default class Schedule extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //horários dos bolsistas 
      schedules: []
    }
  }

  /*async componentDidMount() {
    const h = api.post("/listarHorarioBolsistas");
    console.log((await h).data)
    this.setState({ horarios: (await h).data.map(h => h) });
    console.log(this.state.horarios);
  }*/

  render() {
    return (
      <div id = "background">
        <div id = "visitCalendar">
          {/* <FullCalendar
            //Tira o final de semana 
            weekends={false}
            //Deixa no hórario do Brasil
            locale={ptBr}
            //Como mostrar a informação 
            defaultView='timeGridWeek'
            //Tamanho do calendário.
            height={600}

            header={{
              left: ' ',
              //center: 'title',
              right: ' '
            }}
            //tirar o slot de all Day
            allDaySlot={false}

            //Mostrar somente os dias da semana por extenso.
            columnHeaderFormat={{
              weekday: 'long'
            }}

            //Intervalo da funcionamento
            minTime='08:30:00'
            maxTime='22:30:00'

            //Horários de trabalho
            // events = {[
            //     {
            //         daysOfWeek: [ 1 ], // Thursday, Friday
            //         startTime: '09:00', // 10am
            //         endTime: '16:00', // 4pm
            //         rendering: 'background'

            //     },
            //   ]}

            events={this.state.schedules.map(item => (
              {
                daysOfWeek: [item.semana], // Thursday, Friday
                startTime: item.inicioPeriodo, // 10am
                endTime: item.fimPeriodo, // 4pm
                rendering: 'background'
              }
            ))}


            plugins={[dayGridPlugin, timeGridPlugin]}
          /> */}
          <Calendario/>
        </div>
      </div>
    )
  }
}