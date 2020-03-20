import React from "react";
import "./style.css";
import { Card, Button, Row, Col, InputGroup, FormControl, Form, Alert, Modal } from "react-bootstrap";
import api from '../../../services/api';
import DateRangeIcon from '@material-ui/icons/DateRange';
//Tela onde a escola poderá vê os seus agendamentos.
export default class MyScheduling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedulings: [{ data: "25/02", Responsável: "Ana", horario: "09:30" }, { data: "20/02", Responsável: "Samuel", horario: "11:30" }, { data: "25/09", Responsável: "Alice", horario: "15:30" }],
      idSchooll: this.props.idSchool,
      controle: false,
      current: {}
    };
    this.setControl = this.setControl.bind(this);
  }

  componentDidMount() {
    // carrega a lista de agendamentos
    //const response = await api.get("/agendamentos", this.state.IDSchool);
    //this.setState({schedulings: Response.data});
  }

  cancelScheduling(id) {
    //cancela uma visita
    //api.get("/cancelarvisita", this.state.id);
  }

  setControl(event) {
    console.log(event.target.name);
    var teste = event.target.name;
    this.setState({ current: this.state.schedulings[teste] })
    this.setState({ controle: true })
  }

  render() {
    return (
      <div>
        <Modal
          size="lg"
          show={this.state.controle}
          onHide={() => this.setState({ controle: false })}
          aria-labelledby="example-modal-sizes-title-lg"
          id='modal'
        >
          <Modal.Header closeButton id='header'>
            <Modal.Title id="example-modal-sizes-title-lg">
              Agendamento de visita
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={3}>
                  Nome do responsável
                </Form.Label>
                <Col sm={6}>
                  <Form.Control type="text" placeholder="Nome completo" value={this.state.current.Responsável} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalStudent">
                <Form.Label column sm={3}>
                  Quantidade de alunos
                            </Form.Label>
                <Col sm={3}>
                  {/* <Form.Control type="text" placeholder="Max: 40" value={this.state.students} /> */}
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalDate">
                <Form.Label column sm={3}>
                  Horário
                </Form.Label>
                <Col sm={3}>
                  <Form.Control Type="text" value={this.state.current.horario} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalSerie">
                <Form.Label column sm={3}>
                  Série(Ano)
                </Form.Label>
                <Col sm={2}>
                  {/* <Form.Control type="text" placeholder=" " value={this.state.number} /> */}
                </Col>
              </Form.Group>
            </Form>
            <span>
              Status:
              <Alert variant="success">
                Confirmado
              </Alert>
            </span>
          </Modal.Body>
        </Modal>
        <div id="head">
          <Row>
            <Col>
              <h1 id="titleScheduling">Meus Agendamentos</h1>
            </Col>
            <Col>
              <InputGroup>
                <FormControl
                  placeholder="Digite a data da visita..."
                  value={this.state.search}
                  onChange={this.handleChange}
                />
                <InputGroup.Prepend>
                  <Button variant="outline-secondary">&#128269;</Button>
                </InputGroup.Prepend>
              </InputGroup>
            </Col>
          </Row>
        </div>
        <div id="list">
          {this.state.schedulings.map(item => (
            // {this.state.days.indexOf(item).toString()}
            <Card id='item' >
              <Card.Body>
                <span>
                  <span id='test'>
                    <DateRangeIcon fontSize="large" />
                  </span>
                  <span id='data'>
                    {item.data}
                  </span>
                  <span id="responsavel">
                    Responsável:{item.Responsável}
                  </span>
                  <span id='button'>
                    <Button
                      variant="outline-primary"
                      id="view"
                      name = {this.state.schedulings.indexOf(item)}
                      onClick={this.setControl}
                    >
                      Visualizar
                    </Button>

                    <Button
                      variant="outline-danger"
                      id="cancel2"
                      onClick={this.cancelScheduling(item)}
                    >
                      Cancelar visita
                    </Button>
                  </span>
                </span>
              </Card.Body>
            </Card>

          ))}
        </div>
      </div>
    );
  }
}
