import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoutes from './private.routes';
import Home from './views/pages/Home';
import Login from './views/pages/Login';
import Agenda from './views/pages/Agenda';
import Pacientes from './views/pages/Pacientes';
import Especialista from './views/pages/Especialista';
<<<<<<< HEAD

=======
import PacienteInfo from './views/pages/PacienteInfo';
import NovoPaciente from './views/pages/NovoPaciente';

>>>>>>> 8f53027b807f75fc3b080b86ee82143c0ffa5bd2


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/agenda" component={Agenda}/>
        <Route path="/pacientes" exact component={Pacientes}/>
        <Route path="/pacientes/novo" exact component={NovoPaciente}/>
        <Route path="/pacientes/:id" component={PacienteInfo}/>
        <Route path="/especialista" component={Especialista}/>
        {/* <Route path="/senha" component={AlterarSenha}/> */}
        {/* <PrivateRoutes path="/dash" exact component={Dash}/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;