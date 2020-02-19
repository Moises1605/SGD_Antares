import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import ptBr from '@fullcalendar/core/locales/pt-br'
import interactionPlugin from '@fullcalendar/interaction';
import './Calendar.css';
export default class DemoApp extends React.Component {

  render() {
    return (
    <div>
      <FullCalendar 
        defaultView="timeGridWeek" 
        locale ={ptBr} 
        plugins={[ dayGridPlugin, timeGridPlugin]} 
        weekends={false}
        columnHeaderFormat= {{weekday:'long'}}
        slotLabelFormat={{hour:'numeric', minute:'2-digit'}}
        header={{left: '', center: '', right: ''}}
        allDaySlot={false}
        height={450}
        maxTime='20:30:00'
        minTime='08:00:00'
        slotDuration='00:30'
        events = {[
          {
            daysOfWeek: [3,5],
            startTime: '08:00',
            endTime: '12:00',
            rendering: 'background',
            color: '#000000'
          },
          {
            daysOfWeek: [3,5],
            startTime: '15:00',
            endTime: '17:00',
            rendering: 'background',
            color: '#39FF14'
          },
          {
            daysOfWeek: [2,4],
            startTime: '10:00',
            endTime: '12:00',
            rendering: 'background',
            color: '#39FF14'
          },
          {
            daysOfWeek: [2,4],
            startTime: '14:00',
            endTime: '17:00',
            rendering: 'background',
            color: '#39FF14'
          },
          {
            daysOfWeek: [1],
            startTime: '14:00',
            endTime: '17:00',
            rendering: 'background',
            color: '#39FF14'
          }
        ]}
      />
    </div>
       )
    }
  }