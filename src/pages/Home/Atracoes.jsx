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
            <Col md={3}>
              <h3>Atrações</h3>
            </Col>
            <Col md={{ offset: 3 }}>
              <CarouselAtracoes />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
