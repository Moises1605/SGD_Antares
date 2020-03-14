import React from "react";
import { Badge, Row, Col, Toast, Button } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import ptBr from "@fullcalendar/core/locales/pt-br";

import "./Calendar.scss";
import api from "../../services/api";
import { green } from "@material-ui/core/colors";
export default class Calendario extends React.Component {
  constructor() {
    super();
    this.state = {
      horarios: []
    };
  }

  /**NOTE Método que faz requisição de horários dos bolsistas*/
  /*async componentDidMount() {
    const h = api.post("/listarHorarioBolsistas");
    console.log((await h).data)
    this.setState({ horarios: (await h).data.map(h => h) });
    console.log(this.state.horarios);
  }*/
  render() {
    return (
      <div>
        <Row>
          <Col md={12} sm={12} className="calendarBG">
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
                slotDuration="01:00"
                events={this.state.horarios.map(h => ({
                  daysOfWeek: [h.semana],
                  startTime: h.inicioPeriodo,
                  endTime: h.fimPeriodo,
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
        </Row>
      </div>
    );
  }
}
