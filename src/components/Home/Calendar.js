import React from "react";
import { Badge, Row, Col, Toast } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import ptBr from "@fullcalendar/core/locales/pt-br";
import "./Calendar.scss";
import api from "../../services/api";
export default class Calendario extends React.Component {
  constructor() {
    super();
    this.state = {
      horarios: []
    };
  }

  /**NOTE Método que faz requisição de horários dos bolsistas*/
  async componentDidMount() {
    const h = api.post("/listarHorarioBolsistas");
    this.setState({ horarios: (await h).data.map(h => h)[0] });
    console.log(this.state.horarios);
  }
  render() {
    return (
      <div>
        <h2
          id="titulo_calendario"
          style={{
            textAlign: "center"
          }}
        >
          Horários para Agendamentos
          <h6
            id="texto_calendario"
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
                events={this.state.horarios.map(h => ({
                  daysOfWeek: [h.dia],
                  startTime: h.inicioTurno,
                  endTime: h.fimTurno,
                  rendering: "background",
                  color: "#39FF14"
                }))}
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
