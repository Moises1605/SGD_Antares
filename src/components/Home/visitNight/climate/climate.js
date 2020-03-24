import React from "react";
import {
  Button,
  ButtonToolbar,
  Popover,
  Overlay,
  OverlayTrigger
} from "react-bootstrap";
//import { Link } from 'react-router-dom'
import "./style.css";

export default class Climate extends React.Component {
  render() {
    return (
      <div>
      <br></br>
      <br></br>
      <ButtonToolbar>
        
        {/* <p id="alert"> */}
          <h6 id="alert">Cuidado com as condições climaticas.</h6>
        {/* </p> */}
        <OverlayTrigger
          trigger="click"
          key="top"
          placement="top"
          overlay={
            <Popover id={`popover-positioned-top`}>
              <Popover.Title as="h3">Atenção</Popover.Title>
              <Popover.Content>
                A depender das condições climaticas no dia da visita, as
                atividades feitas com o telescópio podem ser{" "}
                <strong>canceladas</strong> e será realizada somente a palestra.
              </Popover.Content>
            </Popover>
          }
        >
          <Button id="more" variant="danger" size="sm">
            Saiba mais
          </Button>
        </OverlayTrigger>
      </ButtonToolbar>
      </div>
    );
  }
}
