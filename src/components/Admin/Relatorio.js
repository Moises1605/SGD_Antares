import React, { Component } from "react";

import {
  Container,
  Row,
  Col,
  InputGroup,
  Dropdown,
  Button,
  FormControl,
  Table
} from "react-bootstrap";
import { Alert, AlertTitle } from "@material-ui/lab";

class Relatorio extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      rows: [],
      modalShow: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  handleSearch() {}

  componentDidMount() {
    this.setState({});
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h3 style={{ textAlign: "left", marginTop: "15px" }}>Relatórios</h3>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <div style={{ height: "3vh" }}></div>
        </Row>
        <Row>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="outline-primary">
                Ordenar Por
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Nome</Dropdown.Item>
                <Dropdown.Item>Data</Dropdown.Item>
                <Dropdown.Item>Nº de Visitantes</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col></Col>
          <Col>
            <InputGroup>
              <FormControl
                placeholder="Procurar..."
                onChange={this.handleChange}
                value={this.state.search}
              />
              <InputGroup.Prepend>
                <Button variant="outline-secondary" onClick={this.handleSearch}>
                  &#128269;
                </Button>
              </InputGroup.Prepend>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <div style={{ height: "3vh" }}></div>
        </Row>
        <Row>
          <Col>
            <div
              style={{
                height: "40vh",
                overflowY: "auto"
              }}
            >
              <Table size="md" bordered hover responsive striped>
                <thead>
                  <tr>
                    <th>Relatórios</th>
                    <th>Nº de Visitantes</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody>{this.state.rows}</tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            {this.state.rows.length === 0 && (
              <Alert
                severity="warning"
                variant="outlined"
                style={{
                  width: "70vh",
                  height: "auto"
                }}
              >
                <AlertTitle>
                  <b>Ainda não há relatórios no banco de dados </b>
                </AlertTitle>
              </Alert>
            )}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default Relatorio;
