import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { Container, Row, Col } from "react-bootstrap";
import "./maps.scss";
class MapContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <h2 id="mapa_titulo">
            Endereço
            <h6 id="mapa_info">
              <i>
                R. Barra, 925 - Jardim Cruzeiro, Feira de Santana - BA,
                44015-430
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
        </Container>
        <Container fluid>
          <Row>
            <Col md={2}></Col>
            <Col>
              <Map
                className="map"
                mapTypeControl={false}
                google={this.props.google}
                zoom={16}
                initialCenter={{ lat: -12.239816, lng: -38.979001 }}
              ></Map>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAA83aylDZZXSRbQfj0KEpTQXVEfvmHRPY",
  language: "pt-br"
})(MapContainer);
