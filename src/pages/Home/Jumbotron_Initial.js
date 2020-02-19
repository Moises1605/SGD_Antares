import React from 'react';
import {Jumbotron, Container, Row, Col, Button, ButtonToolbar} from 'react-bootstrap';
import CarouselAtracoes from './Carousel_Atracoes';
import './Jumbotron2.css';

export default class JumbotronAtracoes extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Jumbotron fluid >
                    <Container >
                        <Row class="efeito">
                            <Col  md={5}>
                                    <h1>Seja bem-vindo!</h1>
                                    <h5>
                                    No Observatório Astronômico Antares, são realizadas visitas a exposições, observações com telescópios automatizados, cursos,
                                    palestras, laboratórios, projeções de vídeo, sessões no planetário, etc.
                                    </h5>
                                    <br/>
                                    <ButtonToolbar aria-label="Toolbar with button groups">
                                        <Button  variant="outline-success" className="mr-2">Agendamento Escolar</Button>
                                        <Button  variant="outline-success" className="mr-2">Agendamento Noturno</Button>
                                    </ButtonToolbar>
                            </Col> 
                           
                            <Col md={{offset: 2 }}>
                                <CarouselAtracoes/>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </React.Fragment>
        )
    }
}
