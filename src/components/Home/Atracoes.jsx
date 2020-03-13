import React from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  ButtonToolbar,
  Card,
  CardDeck
} from "react-bootstrap";
import CarouselAtracoes from "./Carousel_Atracoes";
import VisitNight from "./visitNight/visitNight";
import image from "../../assets/astronomia.jpg";
import image2 from "../../assets/rupestre.jpg";
import image3 from "../../assets/Arara.jpg";

import "./atracoes.scss";

export default class Atracoes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <h2
              id="titulo_atracoes"
              style={{
                color: "#007bff",
                textAlign: "center"
              }}
            >
              Atrações
            </h2>
            <h5 id="texto_atracoes">
              No Observatório Astronômico Antares, são realizadas visitas a
              exposições, observações com telescópios automatizados, cursos,
              palestras, laboratórios, projeções de vídeo, sessões no
              planetário, etc.
            </h5>
          </Row>

          {/*<Row
            style={{
              paddingTop: "30px"
            }}
          >
            <Col md={4} sm={4}>
              <Card
                bg="primary"
                text="light"
                className="text-center"
                style={{ width: "18rem" }}
              >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Astronomia</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <br />
            <Col md={4} sm={4}>
              <Card
                bg="primary"
                text="light"
                className="text-center"
                style={{ width: "18rem" }}
              >
                <Card.Img variant="top" src={image2} />
                <Card.Body>
                  <Card.Title>Origem do homem</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={4}>
              <Card
                bg="primary"
                text="light"
                className="text-center"
                style={{ width: "18rem" }}
              >
                <Card.Img variant="top" src={image3} />
                <Card.Body>
                  <Card.Title> Biodiversidade</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>*/}
          <CardDeck
            style={{
              paddingTop: "30px"
            }}
          >
            <Card bg="primary" text="light" className="text-center" style={{}}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>Astronomia</Card.Title>
              </Card.Body>
            </Card>
            <Card bg="primary" text="light" className="text-center">
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Card.Title>Origem do homem</Card.Title>
              </Card.Body>
            </Card>
            <Card bg="primary" text="light" className="text-center">
              <Card.Img variant="top" src={image3} />
              <Card.Body>
                <Card.Title> Biodiversidade</Card.Title>
              </Card.Body>
            </Card>
          </CardDeck>
          {/**<Row class="efeito">
            <Col
              md={4}
              sm={12}
              >
               <h2 id="titulo_atracoes">Atrações</h2>
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
              <h5 id="texto_atracoes">
                No Observatório Astronômico Antares, são realizadas visitas a
                exposições, observações com telescópios automatizados, cursos,
                palestras, laboratórios, projeções de vídeo, sessões no
                planetário, etc.
              </h5> 
                <Col md={{ offset: 2 }}>
              <CarouselAtracoes />*/}
        </Container>
      </React.Fragment>
    );
  }
}
