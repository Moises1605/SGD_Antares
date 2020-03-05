import React from "react";
import "./style.css";
import FormRegister from '../../components/Register2/FormRegister/formRegister';

import NavBar from "../../components/Padrao/NavBar/NavBar";

export default class Register2 extends React.Component {
  render() {
    return (
      <div id="contentForm">
        <div>
          <NavBar />
        </div>
        <div id="leftSideT">
          <div id="formsT">
            <FormRegister />
          </div>
        </div>
      </div>
    );
  }
}
