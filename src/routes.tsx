import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoutes from './private.routes';
import Home from './views/pages/Home';
import Login from './views/pages/Login';
import Agenda from './views/pages/Agenda';
import Prontuario from './views/pages/Prontuario'
import Pacientes from './views/pages/Pacientes';
import Especialista from './views/pages/Especialista';
import PacienteInfo from './views/pages/PacienteInfo';
import NovoPaciente from './views/pages/NovoPaciente';
import AlterarSenha from './views/pages/AlterarSenha';
import AlterarAgendamento from './views/pages/AlterarAgendamento';



const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/agenda" component={Agenda}/>
        <Route path="/pacientes" exact component={Pacientes}/>
        <Route path="/pacientes/novo" exact component={NovoPaciente}/>
        <Route path="/prontuario" exact component={Prontuario}/>
        <Route path="/pacientes/:id" component={PacienteInfo}/>
        <Route path="/agendamentos/:id" component={AlterarAgendamento}/>
        <Route path="/especialista" component={Especialista}/>
        <Route path="/senha" component={AlterarSenha}/>
        {/* <PrivateRoutes path="/dash" exact component={Dash}/> */}
        <Redirect from="*" to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;