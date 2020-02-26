import React from "react";
import { Badge, Row, Col, Toast } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import ptBr from "@fullcalendar/core/locales/pt-br";

import "./Calendar.css";
export default class Calendario extends React.Component {
  render() {
    return (
      <div>
        <h2
          style={{
            textAlign: "center"
          }}
        >
          Horários para Agendamentos
          <h6
            style={{
              marginTop: "10px"
            }}
          >
            <i>
              Horário de funcionamento: seg a sex das 9:00 as 12:00 e 14:00 as
              17:00
            </i>
          </h6>
        </h2>
        <hr
          style={{
            width: "25%",
            margin: "auto",
            backgroundColor: "#d3d3d3"
          }}
        ></hr>
        <hr
          style={{
            width: "12.5%",
            margin: "7px auto 0 auto",
            backgroundColor: "#dcdcdc"
          }}
        ></hr>
        <Row>
          <Col></Col>
          <Col md={12}>
            <div id="calendarBG">
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
                slotDuration="01:00"
                events={[
                  {
                    daysOfWeek: [1, 2, 3, 4, 5],
                    startTime: "09:00",
                    endTime: "12:00",
                    rendering: "background",
                    color: "#39FF14"
                  },

                  {
                    daysOfWeek: [1, 2, 3, 4, 5],
                    startTime: "14:00",
                    endTime: "18:00",
                    rendering: "background",
                    color: "#39FF14"
                  }
                ]}
              />
            </div>
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
              </h4>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </div>
    );
  }
}
