import React from 'react';
import FormSignIn from '../../../components/FormSignIn';
import Logo from '../../../assets/Logo'
import { DivComponent } from './styles';

const Login: React.FC = () => {
  return (
    <DivComponent>
      <div className="container">
        <Logo />
        <FormSignIn />
      </div>
    </DivComponent>
  );
}

export default Login;