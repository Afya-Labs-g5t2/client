import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
        <Route path="/login" component={Login}/>
        <PrivateRoutes path="/" exact component={Home}/>
        <PrivateRoutes path="/agenda" component={Agenda}/>
        <PrivateRoutes path="/pacientes" exact component={Pacientes}/>
        <PrivateRoutes path="/pacientes/novo" exact component={NovoPaciente}/>
        <PrivateRoutes path="/prontuario" exact component={Prontuario}/>
        <PrivateRoutes path="/pacientes/:id" component={PacienteInfo}/>
        <PrivateRoutes path="/agendamentos/:id" component={AlterarAgendamento}/>
        <PrivateRoutes path="/especialista" component={Especialista}/>
        <PrivateRoutes path="/senha" component={AlterarSenha}/>
        {/* <PrivateRoutes path="/dash" exact component={Dash}/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;