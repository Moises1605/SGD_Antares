import React from "react";
import { Badge } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import ptBr from "@fullcalendar/core/locales/pt-br";

import "./Calendar.css";
export default class Calendario extends React.Component {
  render() {
    return (
      <div>
        <FullCalendar
          defaultView="timeGridWeek"
          displayEventEnd={true}
          locale={ptBr}
          plugins={[dayGridPlugin, timeGridPlugin]}
          weekends={false}
          columnHeaderFormat={{ weekday: "long" }}
          slotLabelFormat={{ hour: "numeric", minute: "2-digit" }}
          header={{ left: "", center: "", right: "" }}
          allDaySlot={false}
          height={"auto"}
          minTime="09:00:00"
          maxTime="18:00:00"
          slotDuration="00:30"
          events={[
            {
              daysOfWeek: [1, 2, 3, 4, 5],
              startTime: "09:00",
              endTime: "12:00",
              rendering: "background",
              color: "#39FF14",
              displayEventEnd: true
            },
            {
              daysOfWeek: [1, 2, 3, 4, 5],
              startTime: "12:00",
              endTime: "14:00",
              rendering: "background",
              color: "#ff0000"
            },
            {
              daysOfWeek: [1, 2, 3, 4, 5],
              startTime: "14:00",
              endTime: "17:00",
              rendering: "background",
              color: "#39FF14"
            }
          ]}
        />
        <div
          id="legenda"
          style={{
            marginTop: "25px"
          }}
        >
          <h4>
            <Badge m-2 variant="success">
              DISPONÍVEL
            </Badge>{" "}
            <Badge m-2 variant="danger">
              {" "}
              INDISPONÍVEL
            </Badge>
          </h4>
        </div>
      </div>
    );
  }
}
