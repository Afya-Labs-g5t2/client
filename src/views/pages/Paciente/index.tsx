import React, { useState } from 'react';
import User from '../User'
import Menu from '../../../components/Menu'
import {DivComponent} from './styles'
import NavBar from '../../../components/NavBar';

import mockPacientes from '../../../mockPacientes';

// import { Container } from './styles';

const Paciente: React.FC = () => {

  const [showUser, setShowUser] = useState(false)

  function handleToggle() {
    setShowUser(!showUser)
  }

  console.log(mockPacientes.pacientes)

  return (
      <>
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
            <p className="test"></p>
          </div>  
          <User close={handleToggle} showComponent={showUser}/>
        </div>
        <div className="bot-container">
          <Menu />
        </div>
          
      </div>
      </DivComponent>
      </>
  );
}

export default Paciente;