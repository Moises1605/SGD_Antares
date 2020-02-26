import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { Container, Row, Col } from "react-bootstrap";

class MapContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <h2
            style={{
              textAlign: "center"
            }}
          >
            Endereço
            <h6
              style={{
                marginTop: "10px"
              }}
            >
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
        <div style={{ marginRight: "0" }}>
          <Row>
            <Col md={2}></Col>
            <Col>
              <Map
                mapTypeControl={false}
                google={this.props.google}
                zoom={16}
                style={{
                  width: "100%",
                  height: "350px",
                  position: "relative",
                  marginTop: "20px"
                }}
                initialCenter={{ lat: -12.239816, lng: -38.979001 }}
              />
            </Col>
            <Col md={2}></Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAA83aylDZZXSRbQfj0KEpTQXVEfvmHRPY"
})(MapContainer);
