import React from 'react';
import './style.css';
import { Link, Redirect } from 'react-router-dom'
import {Jumbotron, Button} from 'react-bootstrap'


export default class JumBrotonRegister extends React.Component {

    render() {
        return (
            <Jumbotron>
                <h1>Cadastro feito com sucesso</h1>
                <p>
                    Obrigado, o observatório antares agradece o seu cadastro,tenha ótimas visitas!!!
                </p>
                <p>
                    <Link to = '/'>
                        <Button variant="primary">Voltar para tela inicial</Button>
                    </Link>
                </p>
            </Jumbotron>
        )
    }
}