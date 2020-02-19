import React from 'react'
import { Button, Card, Container, Row, Col, Form, Carousel, ButtonToolbar, Tabs, Tab, Sonnet, Table, FormControl, InputGroup, Modal } from 'react-bootstrap';
import './style.css';
import image4 from './image4.png'
import ConfirmBack from './confirmBack/confirmBack'

export default class Header extends React.Component {

    back(event){

    }

    render(){
        return(
        <div  id = 'headerForm'>
                 {/* <div id = 'iconer'>
                     <img id='imagess' src={image4} roundedCircle /> 
                </div> */}
                
                {/* <div id = 'rightSideman'>
                    <div >
                        {/* Sistema de Agendamento do Observatório Antares 
                    </div> 

                    <div id = 'frase'>
                        
                    </div>
                    <ConfirmBack/> 
                    
                </div>  */}
                {/* <ConfirmBack/>  */}
        </div>
        )
    }
}