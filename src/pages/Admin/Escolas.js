import React from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Dropdown,
  InputGroup,
  FormControl,
  Table
} from "react-bootstrap";
import api from "../../services/api";

export default class Escolas extends React.Component {
  constructor() {
    super();
    this.state = {
      rows: [],
      search: ""
    };
  }

  /** REVIEW Método para registrar dados da pesquisa */
  handleChange(event) {
    this.setState({ search: event.target.value });
  }
  /**NOTE Método que faz requisição de dados dos bolsistas e faz a listagem */
  listEscolas = () => {
    api
      .get("/listarEscolas")
      .then(response => {
        response.map(e => (
          <tr>
            <td>
              <b>{e.id}</b>
            </td>
            <td>{e.name}</td>
            <td>{e.phone}</td>
            <td>{e.email}</td>
          </tr>
        ));
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <h3 style={{ textAlign: "left" }}>Gerir Escolas</h3>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <div style={{ height: "3vh" }}></div>
          </Row>
          <Row>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary">
                  Ordenar Por
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Nome</Dropdown.Item>
                  <Dropdown.Item>Telefone</Dropdown.Item>
                  <Dropdown.Item>Email</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col></Col>
            <Col>
              <InputGroup>
                <FormControl
                  placeholder="Procurar..."
                  value={this.state.search}
                  onChange={this.handleChange}
                />
                <InputGroup.Prepend>
                  <Button
                    variant="outline-secondary"
                    onClick={this.handleSearch}
                  >
                    &#128269;
                  </Button>
                </InputGroup.Prepend>
              </InputGroup>
            </Col>
            <Col xs={1}></Col>
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
                <Table hover responsive size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nome</th>
                      <th>Telefone</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/*{this.listEscolas()}*/}
                    {this.state.rows}
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col xs={1}></Col>
          </Row>
          <Row>
            <Col>
              <div style={{ height: "3vh" }}></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
