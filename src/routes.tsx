import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoutes from './private.routes';
import Home from './views/pages/Home';
import Login from './views/pages/Login';
import Agenda from './views/pages/Agenda';
import Pacientes from './views/pages/Pacientes';
import Especialista from './views/pages/Especialista';


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/agenda" component={Agenda}/>
        <Route path="/pacientes" component={Pacientes}/>
        <Route path="/especialista" component={Especialista}/>
        {/* <PrivateRoutes path="/dash" exact component={Dash}/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;