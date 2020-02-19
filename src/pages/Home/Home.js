import React from 'react';

import NavBar from './NavBar';
import JumbotronAtracoes from './Jumbotron_Initial';
import JumbotronLogin from './Jumbotron_Login'
import {Container} from 'react-bootstrap';
import DemoApp from './Calendar';
import './Home.css';

   export default class home extends React.Component{
         
      render(){
         return(
            <React.Fragment>
               <NavBar/>
               <JumbotronAtracoes/>
               <br></br>
               <Container>
                  <h2>Horário disponível para visitas</h2>
                  <DemoApp/>
               </Container>
               <br></br>
               <JumbotronLogin/>
            </React.Fragment>
         );
      }
      
   }