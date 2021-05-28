import React from 'react';
import FormSignIn from '../../../components/FormSignIn';
import { ReactComponent as Logo } from '../../../assets/logo.svg'
import { ContainerLogo, PositionElements } from './styles';

const Login: React.FC = () => {
  return (
    <>
      <PositionElements >
        <ContainerLogo>
          <Logo />
        </ContainerLogo>
        <FormSignIn />
      </PositionElements>
    </>
  );
}

export default Login;