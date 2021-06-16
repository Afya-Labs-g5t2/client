import React, { useEffect, useState } from 'react';
import User from '../User'
import Menu from '../../../components/Menu'
import {DivComponent} from './styles'
import NavBar from '../../../components/NavBar';
import CardPaciente from '../../../components/CardPaciente'

import mockData from '../../../mockData';
import { Link } from 'react-router-dom';
import { api } from '../../../services/api';

// import { Container } from './styles';

const Paciente: React.FC = () => {

  const [showUser, setShowUser] = useState(false)
  const [apiData, setApiData] = useState<[]>([])
  const [searchInputValue, setSearchInputValue] = useState<string>('')

  function handleToggle() {
    setShowUser(!showUser)
  }

  function handleClick(id: number) {
    console.log(id)
  }

  useEffect(() => {
    api.get("pacientes")
      .then(res => {
        setApiData(res.data)
      })
      .catch(console.error)
  }, [])

  const cardPaciente = apiData
    .sort((a: any, b: any) => a.nome > b.nome ? 1 : -1)
    .map((paciente: any) => paciente.nome.toLowerCase().includes(searchInputValue.toLowerCase()) &&
      <Link to={`/pacientes/${paciente.id}`} key={paciente.id}>
        <CardPaciente
          key={paciente.id}
          name={paciente.nome} 
          email={paciente.email}
          telefone={paciente.telefone}
          id={paciente.id} 
          handleClick={() => handleClick(paciente.id)} 
        />
      </Link>
    )                         

  return (
      <DivComponent>
      <div className="page-container">
        <div className="top-Container">
        <NavBar />
        </div>
        <div className="content-container">
          <div className="search-container">
            <div className="search-field">
              <span className="search-icon material-icons" >search</span>
              <input type="text" value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)}></input>
              <span className="clean-icon material-icons" onClick={() => setSearchInputValue('')}>close</span>
            </div>
          </div>  
          <div className="results-container">
            {cardPaciente}
          </div>  
        </div>
        <div className="bot-container">
          <Menu />
        </div>
          
      </div>
      </DivComponent>
  );
}

export default Paciente;