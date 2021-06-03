import React, { useState } from 'react';
import User from '../User'
import Menu from '../../../components/Menu'
import {DivComponent} from './styles'

// import { Container } from './styles';

const Especialista: React.FC = () => {

  const [showUser, setShowUser] = useState(false)

  function handleToggle() {
    setShowUser(!showUser)
  }

  return (
      <>
      <DivComponent>
      <div className="page-container">
        <div className="top-Container">
          <h1 onClick={handleToggle}>Especialista</h1>
        </div>
        <div className="content-container">   
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

export default Especialista;