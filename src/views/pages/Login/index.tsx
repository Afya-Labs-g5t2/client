import React from 'react';
import FormSignIn from '../../../components/FormSignIn';
import {ReactComponent as Logo} from '../../../assets/logo.svg'
import { ContainerLogo } from './styles';

const Login: React.FC = () => {
  return (
      <>
      
      <ContainerLogo>
        <Logo />
      </ContainerLogo>
      <FormSignIn />
      </>
  );
}

export default Login;