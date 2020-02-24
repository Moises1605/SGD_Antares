import React from 'react';
import {Container, Row, Col, Nav} from 'react-bootstrap';
import Bolsistas from './Bolsistas';
import Funcionario from './Funcionario';
import Relatorio from './Relatorio';
import Escolas from './Escolas';
import LateralBar from './lateral_bar';
import Navbar from './NavBar'
import Sidebar from './Sidebar';

export default class Admin extends React.Component{
    constructor(){
        super();
        this.state = {
            screens : [
                <Relatorio/>,
                <Funcionario/>,
                <Bolsistas/>,
                <Escolas/>,
                null,
            ],
            active :null,
        };
        this.handleClickLink = this.handleClickLink.bind(this);
        this.form = this.form.bind(this);
    }
    
    handleClickLink(eventKey){
        this.setState({
            active: this.state.screens[eventKey-1]
        });	
    }

    form(eventKey){
        this.setState({
            active: this.state.screens[eventKey-1]
        });	
    }
    render(){
        return(
            <div>
                <Container fluid style={{paddingLeft: 0, paddingRight: 0}}>
                    <Row>
                        <Container fluid>
                            <Navbar/>
                        </Container> 
                    </Row>
                    <Row>
                    <Col>
                    <div style={{
                        height: "100vh",
                        width : "18vw",
                        float: "left",
                        borderStyle: "solid",
                        borderWidth: " 0px 1px 0px 0px",
                        borderColor: "#ececec",
                        backgroundColor: "#f8f9fa",
			position: "fixed",
			paddingTop: "20vh"
                    }}>
                            <LateralBar onClick={this.handleClickLink} />
                        </div>
                    </Col>
                    <Col>
                        <div style={{
                            float: "right",
                            height: "90vh",
                            width: "78vw",
                            paddingTop: "15vh",
                            paddingLeft: "2vw",
                        }}>
                            <Container fluid >
                                <Row>
                                    <Col>
                                        <div style={{height: "5vh"}}></div>
                                    </Col>
                                </Row>
                                <Row>	    
                                    <Col>
                                        {this.state.active}
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
