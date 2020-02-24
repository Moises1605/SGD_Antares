import React from "react";
import { Jumbotron, Container, Button, ButtonToolbar } from "react-bootstrap";
import "./Jumbotron2.css";
import VisitNight from "./visitNight/visitNight";
import Contact from "./Contato";

export default class JumbotronLogin extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <Container>
            <div style={{ marginTop: "0px" }}>
              <Contact />
            </div>
          </Container>
        </Jumbotron>
      </React.Fragment>
    );
  }
}
