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
  ModalBody,
  ModalTitle
} from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import { Alert, AlertTitle } from "@material-ui/lab";
import api from "../../services/api";
import CadastroBolsista from "./form_bolsista";

export default class Bolsistas extends React.Component {
  constructor() {
    super();
    this.state = {
      rows: [],
      search: "",
      show: false,
      //utilizado para testes.

      bolsistas: []
    };
  }
  /** REVIEW Método para registrar dados da pesquisa */
  handleChange = event => this.setState({ search: event.target.value });

  /** NOTE Método para abrir o modal */
  setControl = () => this.setState({ show: true });

  /**NOTE Método para fechar o modal */
  handleClose = () => this.setState({ show: false });

  /**NOTE Método que faz requisição de dados dos bolsistas e faz a listagem */

  async componentDidMount() {
    const b = api.post("/listarBolsistas");
    this.setState({ bolsistas: (await b).data.map(b => b) });
    console.log(this.state.bolsistas);
  }

  deleteItem = id => console.log(id);

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <h3 style={{ textAlign: "left", marginTop: "15px" }}>
                Gerir Bolsista
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
                  <Button variant="outline-secondary">&#128269;</Button>
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
                    {this.state.bolsistas.map((b, i = 0) => (
                      <tr key={b.id} name={b.id}>
                        <td>
                          <b>{i++}</b>
                        </td>
                        <td>{b.name}</td>
                        <td>{b.email}</td>
                        <td>{b.phone}</td>
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
              {this.state.bolsistas.map(b => (
                <Row style={{ paddingTop: "14px" }}>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => this.deleteItem(b.id)}
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
                    height: "auto"
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
