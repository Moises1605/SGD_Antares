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
} from "react-bootstrap";
import api from "../../services/api";
import { Alert, AlertTitle } from "@material-ui/lab";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from '@material-ui/core/CircularProgress';

export default class Escolas extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      escolas: [],
      escolasReserva: [],
      loading: true
    };
  }

  /** REVIEW Método para registrar dados da pesquisa */
  handleChange = (event) => {
    this.setState({ search: event.target.value });
    let newList = [];
    let escolas = this.state.escolasReserva;
    if (event.target.value !== "") {
      newList = escolas.filter((item) => {
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
      newList = escolas;
      this.setState({ searchControl: false });
    }
    this.setState({ escolas: newList });
  };

  handleSearch = () => {
    let newList = [];
    let escolas = this.state.escolasReserva;
    if (this.state.search !== "") {
      newList = escolas.filter((item) => {
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
      newList = escolas;
      this.setState({ searchControl: false });
    }
    this.setState({ escolas: newList });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleSearch();
    }
  };

  deleteItem = (id) => {
    var newList = this.state.escolas.filter((obj) => obj.idPessoa !== id);
    var newList2 = this.state.escolasReserva.filter(
      (obj) => obj.idPessoa !== id
    );
    this.setState({ escolas: newList, escolasReserva: newList2 });
    var removido = this.state.escolas.filter((obj) => obj.idPessoa === id);
    this.setState({ showdelete: true });
    api.post("/removerEscola", id);
  };

  orderEmailCresc = () => {
    var newList = this.state.escolas;
    newList.sort((a, b) => (a.email > b.email ? 1 : -1));
    this.setState({ escolas: newList });
    this.setState({ orderE: true });
  };
  orderEmailDecresc = () => {
    var newList = this.state.escolas;
    newList.sort((a, b) => (a.email > b.email ? -1 : 1));
    this.setState({ escolas: newList });
    this.setState({ orderE: false });
  };

  orderNomeEscolaCresc = () => {
    var newList = this.state.escolas;
    newList.sort((a, b) => (a.nomeEscola > b.nomeEscola ? 1 : -1));
    this.setState({ escolas: newList });
    this.setState({ orderNE: true });
  };
  orderNomeEscolaDecresc = () => {
    var newList = this.state.escolas;
    newList.sort((a, b) => (a.nomeEscola > b.nomeEscola ? -1 : 1));
    this.setState({ escolas: newList });
    this.setState({ orderNE: false });
  };

  orderNomeResponsavelCresc = () => {
    var newList = this.state.escolas;
    newList.sort((a, b) => (a.nomeResponsavel > b.nomeResponsavel ? 1 : -1));
    this.setState({ escolas: newList });
    this.setState({ orderNR: true });
  };
  orderNomeResponsavelDecresc = () => {
    var newList = this.state.escolas;
    newList.sort((a, b) => (a.nomeResponsavel > b.nomeResponsavel ? -1 : 1));
    this.setState({ escolas: newList });
    this.setState({ orderNR: false });
  };

  async componentDidMount() {
    const e = api.post("/listarEscolas");
    var i = 0;
    this.setState({ escolas: (await e).data.map((e) => e, e.tag === i++) });
    this.setState({
      escolasReserva: (await e).data.map((e) => e, e.tag === i++),
    });
    this.setState({loading: false});
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
              <h3>Escolas Cadastradas</h3>
            </Col>
            <Col></Col>
          </Row>
          <hr />

          <Row>
            <Col>
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
                {this.state.loading ? <CircularProgress/> :
                <Table striped bordered hover responsive size="md">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>
                        Nome da Escola{" "}
                        <IconButton aria-label="delete" size="small">
                          <ExpandMoreIcon onClick={this.orderNomeEscolaCresc} />
                        </IconButton>
                        <IconButton aria-label="delete" size="small">
                          <ExpandLessIcon
                            onClick={this.orderNomeEscolaDecresc}
                          />
                        </IconButton>
                      </th>
                      <th>
                        Nome do Responsável{" "}
                        <IconButton aria-label="delete" size="small">
                          <ExpandMoreIcon
                            onClick={this.orderNomeResponsavelCresc}
                          />
                        </IconButton>
                        <IconButton aria-label="delete" size="small">
                          <ExpandLessIcon
                            onClick={this.orderNomeResponsavelDecresc}
                          />
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
                    {this.state.escolas.map((e, i = 0) => (
                      <tr key={e.idPessoa}>
                        <td>
                          <b>{i++}</b>
                        </td>
                        <td>{e.nome}</td>
                        <td>{e.nomeResponsavel}</td>
                        <td>{e.email}</td>
                        <td>{e.telefone}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                }
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={3}></Col>
            <Col md={5}>
              {this.state.escolas.length === 0 && this.state.loading === false && (
                <Alert
                  severity="warning"
                  variant="filled"
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
