import React from 'react';
import Menu from '../../../components/Menu'
import {DivComponent} from './styles'
import NavBar from '../../../components/NavBar';

const Prontuario: React.FC = () => {
  return (
    <>
    <DivComponent>
    <div className="page-container">
      <div className="top-container">
      <NavBar />
      </div>
      <div className="content-container">
        <div className="content-form">
        <input id="filtro-input" type="text" placeholder="Digite aqui..."/>
        <select id="select-filtro" name="select">
          <option id="nome" value="nome" selected >Por nome</option>
          <option id="data" value="data" >Por data</option>
          <option id="especialista" value="especialista">Por especialista</option>
        </select>
        </div>
      </div>
      <div className="bot-container">
        <Menu />
      </div>
    </div>
    </DivComponent>
    </>
  );
}

export default Prontuario;