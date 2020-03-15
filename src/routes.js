import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Register2 from "./pages/register2/Register";
//import FollowVisit from './pages/Scholarship/FollowVisit/followVisit'
//import MyScheduling from './pages/school/MySchedulings/MyScheduling';
import School from "./pages/school/school";
//import Schedule from './pages/components/schedule/Schedule';
import funcionario_principal from "./pages/Funcionario/Funcionario";
//import infoScholarship from './pages/Scholarship/infoScholarship/infoScholarship';
import Scholarship from "./pages/Scholarship/Scholarship";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import User from './pages/user/user'
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/cadastro" component={Register2} />
      <Route exact path="/escola/" component={School} />
      <Route exact path="/usuario/" component={User} />
      {/* <Route exact path = '/editarEscola' component = {VisitNight}/> */}
      <Route exact path="/Bolsista/:id" component={Scholarship} />
      {/* <Route exact path = "/editarBolsista" component = {infoScholarship}/> */}
      <Route excat path="/Funcionario/:id" component={funcionario_principal} />
      <Route excat path="/administrador/:id" component={Admin} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
