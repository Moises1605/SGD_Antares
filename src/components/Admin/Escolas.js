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
  Toast,
  Badge,
} from "react-bootstrap";
import api from "../../services/api";
import { Alert, AlertTitle } from "@material-ui/lab";
//import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";

export default class Escolas extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      escolas: [],
    };
  }

  /** REVIEW Método para registrar dados da pesquisa */
  handleChange = (event) => this.setState({ search: event.target.value });

  deleteItem = (id) => {
    var newList = this.state.escolas.filter((obj) => obj.id !== id);
    this.setState({ escolas: newList });
    api.post("/removerEscola", id);
  };

  orderEmail = () => {
    this.state.escolas.forEach((obj) => console.log(obj));
    var newList = this.state.escolas;
    newList.sort((a, b) => (a.email > b.email ? 1 : -1));
    this.setState({ escolas: newList });
  };

  orderNomeEscola = () => {
    this.state.escolas.forEach((obj) => console.log(obj));
    var newList = this.state.escolas;
    newList.sort((a, b) => (a.nomeEscola > b.nomeEscola ? 1 : -1));
    this.setState({ escolas: newList });
  };

  orderNomeResponsavel = () => {
    this.state.escolas.forEach((obj) => console.log(obj));
    var newList = this.state.escolas;
    newList.sort((a, b) => (a.nomeResponsavel > b.nomeResponsavel ? 1 : -1));
    this.setState({ escolas: newList });
  };

  orderTag = () => {
    this.state.escolas.forEach((obj) => console.log(obj));
    var newList = this.state.escolas;
    newList.sort((a, b) => (a.tag > b.tag ? 1 : -1));
    this.setState({ escolas: newList });
  };

  async componentDidMount() {
    const e = api.post("/listarEscolas");
    var i = 0;
    this.setState({ escolas: (await e).data.map((e) => e, e.tag === i++) });
    console.log(this.state.escolas);
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col
              style={{
                paddingTop: "15px",
              }}
            >
              <h3>Gerir Escolas</h3>
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
                  <Dropdown.Item onClick={() => this.orderTag}>#</Dropdown.Item>
                  <Dropdown.Item onClick={() => this.orderNomeEscola}>
                    Nome Escola
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => this.orderNomeResponsavel}>
                    Nome do Responsável
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => this.orderEmail}>
                    Email
                  </Dropdown.Item>
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
                      <th>Nome Escola</th>
                      <th>Nome Responsável</th>
                      <th>Telefone</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.escolas.map((e, i = 0) => (
                      <tr key={e.id}>
                        <td>
                          <b>{i++}</b>
                        </td>
                        <td>{e.nome}</td>
                        <td>{e.nomeResponsavel}</td>
                        <td>{e.telefoneResponsavel}</td>
                        <td>{e.Login}</td>
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
              {this.state.escolas.map((e) => (
                <Row style={{ paddingTop: "14px" }}>
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => this.deleteItem(e.id)}
                  >
                    <DeleteIcon />
                  </Button>
                </Row>
              ))}
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={3}></Col>
            <Col md={5}>
              {this.state.escolas.length === 0 && (
                <Alert
                  severity="warning"
                  variant="outlined"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                >
                  <AlertTitle>
                    <b>Ainda não há escolas cadastradas no sistema </b>
                  </AlertTitle>
                </Alert>
              )}
            </Col>
            <Col md={4}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
