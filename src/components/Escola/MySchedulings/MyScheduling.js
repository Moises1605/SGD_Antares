import React from "react";
import "./style.css";
import { Card, Button, Accordion } from "react-bootstrap";
import api from '../../../services/api';
//Tela onde a escola poderá vê os seus agendamentos.
export default class MyScheduling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedulings: ["a", "b", "c"],
      idSchooll: this.props.idSchool,
      controle:0
    };
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

  update(){
    this.setState({controle: (this.state.controle + 1)})
  }

  render() {
    return (
      <div>
        <h1 id="titleScheduling">Meus Agendamentos</h1>
        <div id="list">
          <Accordion defaultActiveKey="0">
            {this.state.schedulings.map(item => (
              // {this.state.days.indexOf(item).toString()}
              
              <Card key={item.id} id="item">
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey={this.state.schedulings.indexOf(item)}>
                    Click me!
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={this.state.schedulings.indexOf(item)}>
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>       
            ))}
          </Accordion>
        </div>
      </div>
    );
  }
}

function update(){
  
}
// {/* <Card.Title>{`Data:${item.data}`}</Card.Title>
//                                 <Card.Subtitle className="mb-2 text-muted">{`Horário:${item.horario}`}</Card.Subtitle>
//                                 <Card.Text>{`Responsável ${item.responsavel}`}</Card.Text>
//                                 <Card.Text>{`Temas: ${item.temas}`}</Card.Text>
//                                 <Card.Text>{`Quantidade de Alunos: ${item.alunos}`}</Card.Text>
//                                 <Card.Text>{`Situação: ${item.situação}`}</Card.Text>*/}
// <Button
//   variant="outline-danger"
//   id="cancel"
//   onClick={this.cancelScheduling(item.id)}
// >
//   Cancelar visita
//                   </Button>