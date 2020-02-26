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
              <p
                style={{
                  textAlign: "justify"
                }}
              >
                Quando vocês acham que as pessoas morrem? Quando elas levam um
                tiro de pistola bem no coração? Não. Quando são vencidas por uma
                doença incurável? Não! Quando bebem uma sopa de cogumelo
                venenoso? Não! Elas morrem... quando são esquecidas. Mesmo
                depois que eu for, meu sonho tornará realidade. Os corações
                doentes serão curados. (Hiluluk)
              </p>
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
