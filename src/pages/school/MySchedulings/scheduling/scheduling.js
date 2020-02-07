import React from 'react';
import { Button, Card, Container, Row, Col, Form, Carousel, ButtonToolbar, Tabs, Tab, Sonnet, Table, FormControl, InputGroup, Modal, ListGroup } from 'react-bootstrap';
import './style.css';

export default class Scheduling extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            schedulings: ['a','b','c'],
            idSchool: this.props.idSchool,
        }
        this.cancelScheduling = this.cancelScheduling.bind(this);
    }

    componentDidMount(){
        // carrega a lista de agendamentos
    }

    cancelScheduling(id){
        //cancela uma visita
    }

    render(){
        return(
            <div id = 'list'>
                
                {this.state.schedulings.map(item =>(
                    // {this.state.days.indexOf(item).toString()}
                    <Card border = 'primary' key = {item.id} id = 'item'>
                        <Card.Body>
                        <Card.Title>iae</Card.Title>
                            {/* <Card.Title>{`Data:${item.data}`}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{`Horário:${item.horario}`}</Card.Subtitle>
                            <Card.Text>{`Responsável ${item.responsavel}`}</Card.Text>
                            <Card.Text>{`Temas: ${item.temas}`}</Card.Text>
                            <Card.Text>{`Quantidade de Alunos: ${item.alunos}`}</Card.Text>
                            <Card.Text>{`Situação: ${item.situação}`}</Card.Text>*/}
                            <Button variant = 'outline-danger' id = 'cancel' onClick = {this.cancelScheduling(item.id)}>Cancelar visita</Button>
                        </Card.Body>
                  </Card>
                ))}
            </div>
        )
    }

}