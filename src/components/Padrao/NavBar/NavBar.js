import React from "react";
import { Navbar } from "react-bootstrap";
import "./NavBar.css";
import logo from "../../../assets/logoV2.png";

export default class NavBar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar
                    className =  "navbar-dark"
                    collapseOnSelect
                    expand="lg"
                    bg="secondary"
                    variant="secondary"
                    fixed="top"
                    //id = "NavTitle"
                >
                    <Navbar.Brand>
                        <img
                            alt=""
                            id="logo"
                            src={logo}
                            className="d-inline-block align-top"
                        />{" "}
                    </Navbar.Brand>
                    <Navbar.Brand   href="/">
                         Observatório Astronômico Antares
                    </Navbar.Brand>
                </Navbar>
            </React.Fragment>
        );
    }
}