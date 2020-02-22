import React from 'react'
import {Card} from 'react-bootstrap';
import './style.css';
//import { Link } from 'react-router-dom'


//Tela responsável por mostrar ao bolsista as visitas que ele tem em um determinado intervalo de tempo
export default class Visits extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visits: ['a']
        }
    }

    componentDidMount() {
        //this.loadVisits();
    }

    // loadVisits = async () => {
    //     /*Carregar visitas no banco*/ 
    // }

    render() {
        return (
            <div>
                {this.state.visits.map(item => (
                    <Card className="ttt" key={item.toString()} bg="light" style={{ width: '24rem' }} >
                        <Card.Header>Escola: Educadanrio Rosa Maria</Card.Header>
                        <Card.Body>
                            <Card.Title>Horario da visita: 08:30</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Responsável da visita:Patricia</Card.Subtitle>
                            <Card.Text>
                                {'Quantidade de alunos: 45\n'}
                            </Card.Text>
                            <Card.Text>
                                <small className="text-muted">Dia da visita: 20/10/2020</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        )
    }
}