import React, { useState } from 'react';
import User from '../User'
import Menu from '../../../components/Menu'
import {DivComponent} from './styles'
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
    .sort((a,b) => a.nomeEspecialista > b.nomePaciente[0] ? 1 : -1)
    .map(prontuario => <CardProntuario
                        key = {prontuario.id}
                        nomePaciente ={prontuario.nomePaciente} 
                        nomeEspecialista ={prontuario.nomeEspecialista}
                        dataProntuario = {prontuario.dataProntuario}
                        id = {prontuario.id} 
                        handleClick={() => handleClick(prontuario.id)} 
                      />)
                                              

  return (
      <DivComponent>
      <div className="page-container">
        <div className="top-Container">
        <NavBar />
        </div>
        <div className="content-container">
          <div className="search-container">
            <div className="search-field">
              <span className="search-icon material-icons">search</span>
              <input type="text"></input>
              <span className="clean-icon material-icons">close</span>
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