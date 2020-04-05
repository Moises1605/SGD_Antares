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
import SweetAlert from "sweetalert2-react";
import SearchIcon from "@material-ui/icons/Search";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
class Funcionario extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      show: false,
      count: 0,
      funcionarios: [
        // PARA TESTES
        {
          nome: "Gina",
          email: "romaiajr5",
          telefone: "124",
          idPessoa: 1,
          tag: 1,
        },
        {
          nome: "Carlos",
          email: "romaiajr7",
          telefone: "42(7031)845-11-5823",
          idPessoa: 2,
          tag: 2,
        },
        {
          nome: "Daniel",
          email: "romaiajr",
          telefone: "381(75)071-11-5532",
          idPessoa: 3,
          tag: 3,
        },
        {
          nome: "Moisés",
          email: "romaiajr1",
          telefone: "3(494)550-04-3416",
          idPessoa: 4,
          tag: 4,
        },
        {
          nome: "Roberto",
          email: "rob",
          telefone: "3(0861)727-37-0504",
          idPessoa: 5,
          tag: 5,
        },
        {
          nome: "Samuel",
          email: "ra",
          telefone: "4(729)307-64-9272",
          idPessoa: 6,
          tag: 6,
        },
        {
          nome: "Ludmilla",
          email: "re",
          telefone: "4(729)307-64-9272",
          idPessoa: 7,
          tag: 7,
        },
      ],
      showdelete: false,
      searchControl: false,
      funcionariosReserva: [
        {
          nome: "Gina",
          email: "romaiajr5",
          telefone: "124",
          idPessoa: 1,
          tag: 1,
        },
        {
          nome: "Carlos",
          email: "romaiajr7",
          telefone: "42(7031)845-11-5823",
          idPessoa: 2,
          tag: 2,
        },
        {
          nome: "Daniel",
          email: "romaiajr",
          telefone: "381(75)071-11-5532",
          idPessoa: 3,
          tag: 3,
        },
        {
          nome: "Moisés",
          email: "romaiajr1",
          telefone: "3(494)550-04-3416",
          idPessoa: 4,
          tag: 4,
        },
        {
          nome: "Roberto",
          email: "rob",
          telefone: "3(0861)727-37-0504",
          idPessoa: 5,
          tag: 5,
        },
        {
          nome: "Samuel",
          email: "ra",
          telefone: "4(729)307-64-9272",
          idPessoa: 6,
          tag: 6,
        },
        {
          nome: "Ludmilla",
          email: "re",
          telefone: "4(729)307-64-9272",
          idPessoa: 7,
          tag: 7,
        },
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
    var newList = this.state.funcionarios.filter((obj) => obj.idPessoa !== id);
    var newList2 = this.state.funcionariosReserva.filter(
      (obj) => obj.idPessoa !== id
    );
    this.setState({ funcionarios: newList, funcionariosReserva: newList2 });
    var removido = this.state.funcionarios.filter((obj) => obj.idPessoa === id);
    this.setState({ showdelete: true });
    api.post("/removerFuncionario", removido);
  };

  orderNameCresc = () => {
    var newList = this.state.funcionarios;
    newList.sort((a, b) => (a.nome > b.nome ? 1 : -1));
    this.setState({ funcionarios: newList });
    this.setState({ orderN: true });
  };
  orderNameDecresc = () => {
    var newList = this.state.funcionarios;
    newList.sort((a, b) => (a.nome > b.nome ? -1 : 1));
    this.setState({ funcionarios: newList });
    this.setState({ orderN: false });
  };

  orderEmailCresc = () => {
    var newList = this.state.funcionarios;
    newList.sort((a, b) => (a.email > b.email ? 1 : -1));
    this.setState({ funcionarios: newList });
    this.setState({ orderE: true });
  };
  orderEmailDecresc = () => {
    var newList = this.state.funcionarios;
    newList.sort((a, b) => (a.email > b.email ? -1 : 1));
    this.setState({ funcionarios: newList });
    this.setState({ orderE: false });
  };

  handleChange = (event) => {
    this.setState({ search: event.target.value });
    let newList = [];
    let funcionarios = this.state.funcionariosReserva;
    if (event.target.value !== "") {
      newList = funcionarios.filter((item) => {
        var lcname = item.nome.toLowerCase();
        var lcemail = item.email.toLowerCase();
        var value = event.target.value.toLowerCase();
        this.setState({ searchControl: true });
        return (
          lcname.includes(value) ||
          lcemail.includes(value) ||
          item.telefone.includes(value)
        );
      });
    }
    if (event.target.value === "") {
      newList = funcionarios;
      this.setState({ searchControl: false });
    }
    this.setState({ funcionarios: newList });
  };

  handleSearch = () => {
    let newList = [];
    let funcionarios = this.state.funcionariosReserva;
    if (this.state.search !== "") {
      newList = funcionarios.filter((item) => {
        var lcname = item.nome.toLowerCase();
        var lcemail = item.email.toLowerCase();
        var value = this.state.search.toLowerCase();
        this.setState({ searchControl: true });
        return (
          lcname.includes(value) ||
          lcemail.includes(value) ||
          item.telefone.includes(value)
        );
      });
    }
    if (this.state.search === "") {
      newList = funcionarios;
      this.setState({ searchControl: false });
    }
    this.setState({ funcionarios: newList });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleSearch();
    }
  };

  async componentDidMount() {
    const f = api.post("/listarFuncionarios");
    this.setState({ funcionarios: (await f).data.map((f) => f) });
  }

  render() {
    return (
      <Container fluid>
        <SweetAlert
          show={this.state.showdelete}
          title="Sucesso"
          text="O funcionario foi removido"
          onConfirm={() =>
            this.setState({ showdelete: false, controlCancel1: false })
          }
        />
        <Row>
          <Col>
            <h3 style={{ textAlign: "left", marginTop: "15px" }}>
              Gerenciar Funcionários
            </h3>
          </Col>
          <Col></Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="outline-primary">
                Ordenar Por
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={this.orderNameCresc}>
                  Nome
                </Dropdown.Item>
                {/*<Dropdown.Item onClick={this.orderNameDecresc}>
                  Nome Decrescente
                  </Dropdown.Item>*/}
                <Dropdown.Item onClick={this.orderEmailCresc}>
                  Email
                </Dropdown.Item>
                {/*<Dropdown.Item onClick={this.orderEmailDecresc}>
                  Email Decrescente
                </Dropdown.Item>*/}
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
                onKeyPress={this.handleKeyPress}
              />
              <InputGroup.Prepend>
                <Button size="sm" variant="primary" onClick={this.handleSearch}>
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
                    <th>
                      Nome{" "}
                      <IconButton aria-label="delete" size="small">
                        <ExpandMoreIcon onClick={this.orderNameCresc} />
                      </IconButton>
                      <IconButton aria-label="delete" size="small">
                        <ExpandLessIcon onClick={this.orderNameDecresc} />
                      </IconButton>
                    </th>
                    <th>
                      Email{" "}
                      <IconButton aria-label="delete" size="small">
                        <ExpandMoreIcon onClick={this.orderEmailCresc} />
                      </IconButton>
                      <IconButton aria-label="delete" size="small">
                        <ExpandLessIcon onClick={this.orderEmailDecresc} />
                      </IconButton>
                    </th>
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
                  onClick={() => this.deleteItem(f.idPessoa)}
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
            {this.state.funcionarios.length === 0 &&
              this.state.searchControl === false && (
                <Alert
                  severity="warning"
                  variant="filled"
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
