import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { Container, Row, Col } from "react-bootstrap";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import ScheduleIcon from "@material-ui/icons/Schedule";
import EmailIcon from "@material-ui/icons/Email";
import "./maps.scss";
class MapContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <hr
              style={{
                width: "100%"
              }}
            ></hr>
            <Col md={4}>
              <h2 id="mapa_titulo">Informações</h2>
              <h5
                id="mapa_info"
                style={{
                  paddingTop: "15px"
                }}
              >
                <p>
                  <RoomIcon /> R. Barra, 925 - Jardim Cruzeiro, Feira de Santana
                  - BA, 44015-430
                </p>
                <p>
                  <PhoneIcon /> (75) 3624-1921
                </p>
                <p>
                  {" "}
                  <ScheduleIcon /> Segunda à Sexta 9:00 as 12:00 e 14:00 as
                  17:30
                </p>

                <p>
                  <EmailIcon /> museuantares@gmail.com
                </p>
              </h5>

              {/*<hr
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
              ></hr>*/}
            </Col>
            <Col>
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
            </Col>
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
