import React from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  ButtonToolbar
} from "react-bootstrap";
import CarouselAtracoes from "./Carousel_Atracoes";
import VisitNight from "./visitNight/visitNight";

export default class Atracoes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row class="efeito">
            <Col xl={5}>
              <h1>Seja bem-vindo!</h1>
              <h5>
                No Observatório Astronômico Antares, são realizadas visitas a
                exposições, observações com telescópios automatizados, cursos,
                palestras, laboratórios, projeções de vídeo, sessões no
                planetário, etc.
              </h5>
              <br />

              <ButtonToolbar aria-label="Toolbar with button groups">
                <Button variant="success" className="mr-2">
                  Agendamento Escolar
                </Button>
                {/* <Button  variant="outline-success" className="mr-2">Agendamento Noturno</Button> */}
                <VisitNight />
              </ButtonToolbar>
              <br />
              <h6>
                <b>
                  <i>
                    <u>
                      O atendimento é gratuito. Não cobramos qualquer taxa pela
                      visitação.
                    </u>
                  </i>
                </b>
              </h6>
            </Col>
            <Col md={{ offset: 1 }}>
              <CarouselAtracoes />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
