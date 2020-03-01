import React from 'react';
import './style.css';
import Header from '../../components/header/header'
import { Card, Button } from "react-bootstrap";
//Tela onde a escola poderá vê os seus agendamentos.
export default class MyScheduling extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            schedulings: ['a','b','c'],
            idSchooll: this.props.idSchool
        }
    } 
    
    componentDidMount(){
         // carrega a lista de agendamentos
    }

    cancelScheduling(id){
        //cancela uma visita
    }

    render() {
       return(
            <div>
                <h1 id = 'titleScheduling'>Meus Agendamentos</h1>
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
            </div>
       )
    }
}