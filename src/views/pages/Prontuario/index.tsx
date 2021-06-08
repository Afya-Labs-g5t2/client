import React, { useState } from 'react';
import User from '../User'
import Menu from '../../../components/Menu'
import { DivComponent } from './styles'
import NavBar from '../../../components/NavBar';
import CardProntuario from '../../../components/CardProntuario'
import mockProntuario from '../../../mockProntuarios';

const Prontuario: React.FC = () => {

  const [showUser, setShowUser] = useState(false)

  function handleToggle() {
    setShowUser(!showUser)
  }

  function handleClick(id: number) {
    console.log(id)
  }

  const cardProntuario = mockProntuario.prontuarios
    .sort((a, b) => a.nomeEspecialista > b.nomePaciente[0] ? 1 : -1)
    .map(prontuario => <CardProntuario
      key={prontuario.id}
      nomePaciente={prontuario.nomePaciente}
      nomeEspecialista={prontuario.nomeEspecialista}
      dataProntuario={prontuario.dataProntuario}
      id={prontuario.id}
      handleClick={() => handleClick(prontuario.id)}
    />)

  return (
    <DivComponent>
      <div className="page-container">
        <div className="top-Container">
          <NavBar />
        </div>
        <div className="content-container">
          <div className="header-medical-container">
            <div className="header-medical-item">
              <p>Paciente: <span>Alberto Silva</span></p>
              <p>Data de Abertura: <span>12/02/2021</span></p>
            </div>
          </div>
          <div className="search-container">
            <div className="search-field">
              <input type="text" placeholder="Digite aqui..." />
              <span className="">
                <select>
                  <option>Por Paciente</option>
                  <option>Por Data</option>
                </select>
              </span>
            </div>
          </div>
          <div className="results-container">
            {cardProntuario}
          </div>
        </div>
        <div className="bot-container">
          <Menu />
        </div>

      </div>
    </DivComponent>
  );
}

export default Prontuario;