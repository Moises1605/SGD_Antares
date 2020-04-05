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
      //utilizado para testes.
      bolsistas: [
        // PARA TESTES
        /*{ name: "Gina", email: "romaiajr5", phone: "124", idPessoa: 1, tag: 1 },
        {
          name: "Carlos",
          email: "romaiajr7",
          phone: "124",
          idPessoa: 2,
          tag: 2,
        },
        {
          name: "Daniel",
          email: "romaiajr",
          phone: "124",
          idPessoa: 3,
          tag: 3,
        },
        {
          name: "Moisés",
          email: "romaiajr1",
          phone: "124",
          idPessoa: 4,
          tag: 4,
        },
        { name: "Roberto", email: "rob", phone: "124", idPessoa: 5, tag: 5 },
        { name: "Samuel", email: "ra", phone: "124", idPessoa: 6, tag: 6 },
        { name: "Ludmilla", email: "re", phone: "124", idPessoa: 7, tag: 7 },
        { name: "Moisés", email: "b", phone: "124", idPessoa: 8, tag: 8 },
        { name: "Moisés", email: "j", phone: "124", idPessoa: 9, tag: 9 },*/
      ],
      orderE: false,
      orderN: false,
    };
  }
  /** REVIEW Método para registrar dados da pesquisa */
  handleChange = (event) => this.setState({ search: event.target.value });

  /** NOTE Método para abrir o modal */
  setControl = () => this.setState({ show: true });

  /**NOTE Método para fechar o modal */
  handleClose = () => this.setState({ show: false });

  /**NOTE Método que faz requisição de dados dos bolsistas e faz a listagem */

  async componentDidMount() {
    const b = api.post("/listarBolsistas");
    this.setState({ bolsistas: (await b).data.map((b) => b) });
    console.log(this.state.bolsistas);
  }

  deleteItem = (id) => {
    var newList = this.state.bolsistas.filter((obj) => obj.idPessoa !== id);
    this.setState({ bolsistas: newList });
    var removido = this.state.bolsistas.filter((obj) => obj.idPessoa === id);
    this.setState({ showdelete: true });
    api.post("/removerBolsista", removido);
  };

  orderName = () => {
    var newList = this.state.bolsistas;
    if (this.state.orderN === false) {
      newList.sort((a, b) => (a.name > b.name ? 1 : -1));
      this.setState({ bolsistas: newList });
      this.setState({ orderN: true });
    } else {
      newList.sort((a, b) => (a.name > b.name ? -1 : 1));
      this.setState({ bolsistas: newList });
      this.setState({ orderN: false });
    }
  };

  orderEmail = () => {
    var newList = this.state.bolsistas;
    if (this.state.orderE === false) {
      newList.sort((a, b) => (a.email > b.email ? 1 : -1));
      this.setState({ bolsistas: newList });
      this.setState({ orderE: true });
    } else {
      newList.sort((a, b) => (a.email > b.email ? -1 : 1));
      this.setState({ bolsistas: newList });
      this.setState({ orderE: false });
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
            this.setState({ showdelete: false, controlCancel1: false })
          }
        />
        <Container fluid>
          <Row>
            <Col>
              <h3 style={{ textAlign: "left", marginTop: "15px" }}>
                Gerir Bolsista
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
                      <th onClick={this.orderName}>Nome</th>
                      <th onClick={this.orderEmail}>Email</th>
                      <th>Telefone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.bolsistas.map((b, i = 0) => (
                      <tr key={b.idPessoa} name={b.idPessoa}>
                        <td>
                          <b>{i++}</b>
                        </td>
                        <td>{b.name}</td>
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
                    onClick={() => this.deleteItem(b.idPessoa)}
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
              {this.state.bolsistas.length === 0 && (
                <Alert
                  severity="warning"
                  variant="outlined"
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
