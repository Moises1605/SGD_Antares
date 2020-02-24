import React from 'react';
import {Jumbotron, Container,Button, ButtonToolbar} from 'react-bootstrap';
import './Jumbotron2.css';
import VisitNight from './visitNight/visitNight';

export default class JumbotronLogin extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <Container>
                    <h2>Ficou interessado?</h2>
                                <h5>
                                    Saiba como realizar um agendamento clicando em
                                    um dos botões abaixo ;)
                                </h5>
                                    <br></br>
                                    <ButtonToolbar aria-label="Toolbar with button groups">
                                        <Button size="md" variant="outline-success" className="mr-2">Agendamento Escolar</Button>
                                        {/* <Button size="md" variant="outline-success" className="mr-2">Agendamento Noturno</Button> */}
                                        <VisitNight/>
                                    </ButtonToolbar>
                            </Container>
                </Jumbotron>
            </React.Fragment>
        )
    }
}