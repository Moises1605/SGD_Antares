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
  Modal,
} from "react-bootstrap";
import api from "../../services/api";
import { Alert, AlertTitle } from "@material-ui/lab";
import CadastroFuncionario from "./form_funcionario";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
class Funcionario extends Component {
  constructor() {
    super();
    this.state = {
      rows: [],
      search: "",
      show: false,
      count: 0,
      funcionarios: [
        // PARA TESTES
        /*{ name: "Gina", email: "eu", phone: "124", id: "1" },
        { name: "Carlos", email: "eu", phone: "124", id: "2" },
        { name: "Daniel", email: "eu", phone: "124", id: "3" },
        { name: "Moisés", email: "eu", phone: "124", id: "4" },
        { name: "Roberto", email: "eu", phone: "124", id: "5" },
        { name: "Samuel", email: "eu", phone: "124", id: "6" },
        { name: "Ludmilla", email: "eu", phone: "124", id: "7" },
        { name: "Moisés", email: "eu", phone: "124", id: "8" },
        { name: "Moisés", email: "eu", phone: "124", id: "9" },*/
      ],
    };
  }

  /** REVIEW Método para registrar dados da pesquisa */
  handleChange = (event) => this.setState({ search: event.target.value });

  /** NOTE Método para abrir o modal */
  setControl = (event) => this.setState({ show: true });

  /**NOTE Método para fechar o modal */
  handleClose = () => this.setState({ show: false });

  /**NOTE Método que faz requisição de dados dos bolsistas e faz a listagem*/

  count = () => this.setState({ count: this.state.count + 1 });

  deleteItem = (id) => {
    var newList = this.state.funcionarios.filter((obj) => obj.id !== id);
    this.setState({ funcionarios: newList });
    api.post("/removerFuncionário", id);
  };

  orderName = () => {
    this.state.funcionarios.forEach((obj) => console.log(obj));
    var newList = this.state.funcionarios;
    newList.sort((a, b) => (a.name > b.name ? 1 : -1));
    this.setState({ funcionarios: newList });
  };

  orderEmail = () => {
    this.state.funcionarios.forEach((obj) => console.log(obj));
    var newList = this.state.funcionarios;
    newList.sort((a, b) => (a.email > b.email ? 1 : -1));
    this.setState({ funcionarios: newList });
  };

  orderTag = () => {
    this.state.funcionarios.forEach((obj) => console.log(obj));
    var newList = this.state.funcionarios;
    newList.sort((a, b) => (a.tag > b.tag ? 1 : -1));
    this.setState({ funcionarios: newList });
  };

  async componentDidMount() {
    const f = api.post("/listarFuncionarios");
    this.setState({ funcionarios: (await f).data.map((f) => f) });
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
                <Dropdown.Item>#</Dropdown.Item>
                <Dropdown.Item onClick={this.orderName}>Nome</Dropdown.Item>
                <Dropdown.Item onClick={this.orderEmail}>Email</Dropdown.Item>
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
                  size="sm"
                  variant="primary"
                  onClick={this.handleSearch}
                >
                  <SearchIcon size="small" />
                </Button>
              </InputGroup.Prepend>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <div style={{ height: "3vh" }}></div>
        </Row>
        <Row
          style={{
            height: "40vh",
            overflowY: "auto",
          }}
        >
          <Col md={11}>
            <div>
              <Table striped bordered hover responsive size="md">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.funcionarios.map((f, i = 1) => (
                    <tr key={f.id}>
                      <td>
                        <b>{i++}</b>
                      </td>
                      <td>{f.nome}</td>
                      <td>{f.email}</td>
                      <td>{f.telefone}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
          <Col
            md={1}
            style={{
              paddingTop: "45px",
            }}
          >
            {this.state.funcionarios.map((f) => (
              <Row style={{ paddingTop: "14px" }}>
                <Button
                  size="sm"
                  variant="outline-danger"
                  onClick={() => this.deleteItem(f.id)}
                >
                  <DeleteIcon />
                </Button>
              </Row>
            ))}
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={3}></Col>
          <Col xs={5}>
            {this.state.funcionarios.length === 0 && (
              <Alert
                severity="warning"
                variant="outlined"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              >
                <AlertTitle>
                  <b>Ainda não há funcionários cadastrados no sistema </b>
                </AlertTitle>
              </Alert>
            )}
          </Col>
          <Col xs={2}></Col>
          <Col xs={2}>
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
