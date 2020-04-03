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
import { Alert, AlertTitle } from "@material-ui/lab";
import CadastroFuncionario from "./form_funcionario";
import DeleteIcon from "@material-ui/icons/Delete";
class Funcionario extends Component {
  constructor() {
    super();
    this.state = {
      rows: [],
      search: "",
      show: false,
      count: 0,
      funcionarios: [],
      control: false, //controle para apresentação do modal
      FuncionárioEscolhido: "-1" //id do funcionario escolhido para edição,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  /** REVIEW Método para registrar dados da pesquisa */
  handleChange = event => this.setState({ search: event.target.value });

  /** NOTE Método para abrir o modal */
  setControl = event => this.setState({ show: true });

  /**NOTE Método para fechar o modal */
  handleClose = () => this.setState({ show: false });

  /**NOTE Método que faz requisição de dados dos bolsistas e faz a listagem*/

  count = () => this.setState({ count: this.state.count + 1 });

  deleteItem = id => console.log(id);

  /*async componentDidMount() {
    const f = api.post("/listarFuncionarios");
    this.setState({ funcionarios: (await f).data.map(f => f) });
  }*/

  //Ativa a apresentação do modal e manda o id do funcionário escolhido
  handleClick(e) {
    console.log(e);
    this.setState({ FuncionárioEscolhido: e, control: true });
  }

  render() {
    return (
      <Container fluid>
        {/* Modal para teste, se quiserem podem mudar o jeito de visuaização, a ideia é utilizar o id que mandei
        para pegar o resto das informações, mas eu não sei se nesse método tu pegar já tudo, ou só o email,nome e telefone */}
        <Modal
          size="lg"
          show={this.state.control}
          onHide={() => this.setState({ control: false })}
          aria-labelledby="example-modal-sizes-title-lg"
          id="modal"
        >
          <Modal.Header closeButton id="header">
            <Modal.Title id="example-modal-sizes-title-lg">
              Testando
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.BolsistaEscolhido}</Modal.Body>
        </Modal>
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
        <Row
          style={{
            height: "40vh",
            overflowY: "auto"
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
                    <tr key={f.id} onClick={() => this.handleClick(f.id)}>
                      <td>
                        <b>{i++}</b>
                      </td>
                      <td>{f.name}</td>
                      <td>{f.email}</td>
                      <td>{f.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
          <Col
            md={1}
            style={{
              paddingTop: "45px"
            }}
          >
            {this.state.funcionarios.map(f => (
              <Row style={{ paddingTop: "14px" }}>
                <Button
                  size="sm"
                  variant="danger"
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
          <Col xs={4}></Col>
          <Col xs={4}>
            {this.state.funcionarios.length === 0 && (
              <Alert
                severity="warning"
                variant="outlined"
                style={{
                  width: "60vh",
                  height: "auto"
                }}
              >
                <AlertTitle>
                  <b>Ainda não há funcionários cadastrados </b>
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
