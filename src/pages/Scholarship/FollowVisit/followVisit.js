import React from 'react'
import { Row, Col,Dropdown} from 'react-bootstrap';
import './style.css';
//import { Link } from 'react-router-dom'
import Header from '../../components/header/header'
import Visits from './visits/visits'


export default class FollowVisit extends React.Component {

    render() {
        return (
            <div id='contentFollow'>
                <div>
                    <Header />
                </div>
                <div>
                    <Row id='followBody'>
                        <Col id="followSideBar">
                            {/*menu lateral*/}
                        </Col>
                        <Col xs lg='10' id='htgr'>
                            <Row id='colFollow' >
                                <Col>
                                    Visitas Agendadas
                                </Col>
                                <Col id= 'interval'>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                                            Intervalo
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Hoje</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Semana</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Mês</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                            <Row id='visitsFollow'>
                                <Visits />
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}