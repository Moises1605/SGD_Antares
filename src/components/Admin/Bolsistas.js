import React from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Dropdown,
  InputGroup,
  FormControl,
  Table,
  Modal,
} from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import { Alert, AlertTitle } from "@material-ui/lab";
import api from "../../services/api";
import CadastroBolsista from "./form_bolsista";
import SearchIcon from "@material-ui/icons/Search";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import SweetAlert from "sweetalert2-react";
export default class Bolsistas extends React.Component {
  constructor() {
    super();
    this.state = {
      rows: [],
      search: "",
      show: false,
      showdelete: false,
      controlCancel1: false,
      bolsistas: [],
      searchControl: false,
      controlCancel: false,
      deleteSelected: "",
      bolsistasReserva: [],
    };
  }

  /** NOTE Método para abrir o modal */
  setControl = () => this.setState({ show: true });

  /**NOTE Método para fechar o modal */
  handleClose = () => this.setState({ show: false });

  /**NOTE Método que faz requisição de dados dos bolsistas e faz a listagem */

  async componentDidMount() {
    const b = api.post("/listarBolsistas");
    this.setState({ bolsistas: (await b).data.map((b) => b) });
    this.setState({ bolsistasReserva: (await b).data.map((b) => b) });
  }

  deleteItem = () => {
    var id = this.state.deleteSelected;
    var newList = this.state.bolsistas.filter((obj) => obj.idPessoa !== id);
    var newList2 = this.state.bolsistasReserva.filter(
      (obj) => obj.idPessoa !== id
    );
    this.setState({ bolsistas: newList, bolsistasReserva: newList2 });
    var removido = this.state.bolsistas.filter((obj) => obj.idPessoa === id);
    this.setState({ showdelete: true });
    api.post("/removerBolsista", removido);
  };

  // Responsável por controlar a visualização do modal de cancelamento de visitas.
  setControlCancel(id) {
    this.setState({ controlCancel: true, deleteSelected: id});
  }

  orderNameCresc = () => {
    var newList = this.state.bolsistas;
    newList.sort((a, b) => (a.nome > b.nome ? 1 : -1));
    this.setState({ bolsistas: newList });
    this.setState({ orderN: true });
  };

  orderNameDecresc = () => {
    var newList = this.state.bolsistas;
    newList.sort((a, b) => (a.nome > b.nome ? -1 : 1));
    this.setState({ bolsistas: newList });
    this.setState({ orderN: false });
  };

  orderEmailCresc = () => {
    var newList = this.state.bolsistas;

    newList.sort((a, b) => (a.email > b.email ? 1 : -1));
    this.setState({ bolsistas: newList });
    this.setState({ orderE: true });
  };
  orderEmailDecresc = () => {
    var newList = this.state.bolsistas;
    newList.sort((a, b) => (a.email > b.email ? -1 : 1));
    this.setState({ bolsistas: newList });
    this.setState({ orderE: false });
  };

  handleChange = (event) => {
    this.setState({ search: event.target.value });
    let newList = [];
    let bolsistas = this.state.bolsistasReserva;
    if (event.target.value !== "") {
      newList = bolsistas.filter((item) => {
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
      newList = bolsistas;
      this.setState({ searchControl: false });
    }
    this.setState({ bolsistas: newList });
  };

  handleSearch = () => {
    let newList = [];
    let bolsistas = this.state.bolsistasReserva;
    if (this.state.search !== "") {
      newList = bolsistas.filter((item) => {
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
      newList = bolsistas;
      this.setState({ searchControl: false });
    }
    this.setState({ bolsistas: newList });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleSearch();
    }
  };
  render() {
    return (
      <div>
        <SweetAlert
          show={this.state.showdelete}
          title="Sucesso"
          text="O bolsistas foi removido"
          onConfirm={() =>
            this.setState({ showdelete: false, controlCancel: false })
          }
        />
         <Modal
          show={this.state.controlCancel}
          onHide={() => this.setState({ controlCancel: false })}
          aria-labelledby="example-modal-sizes-title-lg"
          id="modal"
        >
          <Modal.Header closeButton id="header">
            <Modal.Title id="example-modal-sizes-title-lg">
              Tem certeza que deseja excluir o bolsista?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button
              variant="outline-danger"
              id="cancel2"
              onClick={() => this.deleteItem()}
            >
              Exluir bolsista
            </Button>
          </Modal.Body>
        </Modal>
        <Container fluid>
          <Row>
            <Col>
              <h3 style={{ textAlign: "left", marginTop: "15px" }}>
                Gerenciar Bolsista
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
                  {/*} <Dropdown.Item onClick={this.orderNameDecresc}>
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
                    {this.state.bolsistas.map((b, i = 0) => (
                      <tr key={b.idPessoa} name={b.idPessoa}>
                        <td>
                          <b>{i++}</b>
                        </td>
                        <td>{b.nome}</td>
                        <td>{b.email}</td>
                        <td>{b.telefone}</td>
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
              {this.state.bolsistas.map((b) => (
                <Row style={{ paddingTop: "14px" }}>
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => this.setControlCancel(b.idPessoa)}
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
              {this.state.bolsistas.length === 0 &&
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
                      <b>Ainda não há bolsistas cadastrados no sistema </b>
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
        </Container>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Cadastro de Bolsista</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CadastroBolsista />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
