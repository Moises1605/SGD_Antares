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
            <Col
              md={4}
              style={{
                textAlign: "center"
              }}
            >
              <h2>Atrações</h2>
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
              <h5
                style={{
                  paddingTop: "10px"
                }}
              >
                No Observatório Astronômico Antares, são realizadas visitas a
                exposições, observações com telescópios automatizados, cursos,
                palestras, laboratórios, projeções de vídeo, sessões no
                planetário, etc.
              </h5>
            </Col>
            <Col md={{ offset: 2 }}>
              <CarouselAtracoes />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
