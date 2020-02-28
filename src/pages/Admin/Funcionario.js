import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  InputGroup,
  FormControl,
  Button,
  Table,
  Modal
} from "react-bootstrap";
import api from "../../services/api";
import CadastroFuncionario from "./form_funcionario";
class Funcionario extends Component {
  constructor() {
    super();
    this.state = {
      rows: [],
      search: "",
      show: false,
      funcionarios: []
    };
  }

  /** REVIEW Método para registrar dados da pesquisa */
  handleChange = event => this.setState({ search: event.target.value });

  /** NOTE Método para abrir o modal */
  setControl = event => this.setState({ show: true });

  /**NOTE Método para fechar o modal */
  handleClose = () => this.setState({ show: false });

  /**NOTE Método que faz requisição de dados dos bolsistas e faz a listagem*/

  async componentDidMount() {
    const f = api.post("/listarFuncionarios");
    this.setState({ funcionarios: (await f).data.map(f => f)[0] });
    console.log(this.state.funcionarios);
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h3 style={{ textAlign: "left", marginTop: "15px" }}>
              Gerir Funcionários
            </h3>
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
                <Dropdown.Item>CPF</Dropdown.Item>
                <Dropdown.Item>Telefone</Dropdown.Item>
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
              <Table striped bordered hover responsive size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.funcionarios.map(f => (
                    <tr>
                      <td>
                        <b>{f.id}</b>
                      </td>
                      <td>{f.name}</td>
                      <td>{f.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={10}></Col>
          <Col>
            <Button variant="primary" block onClick={this.setControl}>
              Novo Cadastro
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ height: "3vh" }}></div>
          </Col>
        </Row>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Cadastro de Funcionário</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CadastroFuncionario />
          </Modal.Body>
        </Modal>
      </Container>
    );
  }
}

export default Funcionario;
