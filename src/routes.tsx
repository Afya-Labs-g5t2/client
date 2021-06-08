import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoutes from './private.routes';
import Home from './views/pages/Home';
import Login from './views/pages/Login';
import Agenda from './views/pages/Agenda';
import Paciente from './views/pages/Paciente';
import Especialista from './views/pages/Especialista';
import AlterarSenha from './views/pages/Alterar_Senha';


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/agenda" component={Agenda}/>
        <Route path="/paciente" component={Paciente}/>
        <Route path="/especialista" component={Especialista}/>
        <Route path="/senha" component={AlterarSenha}/>
        {/* <PrivateRoutes path="/dash" exact component={Dash}/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;