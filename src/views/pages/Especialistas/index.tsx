import React, { useEffect, useState } from 'react';
import User from '../User'
import Menu from '../../../components/Menu'
import {DivComponent} from './styles'
import NavBar from '../../../components/NavBar';
import CardPaciente from '../../../components/CardPaciente'

import mockData from '../../../mockData';
import { Link } from 'react-router-dom';
import { api } from '../../../services/api';
import Loading from '../../../components/Loading';

// import { Container } from './styles';

const Especialistas: React.FC = () => {

  const [showUser, setShowUser] = useState(false)
  const [apiData, setApiData] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleToggle() {
    setShowUser(!showUser)
  }

  function handleClick(id: number) {
    console.log(id)
    console.log(apiData)
    
  }

  useEffect(() => {
    setIsLoading(true)
    api.get("especialistas")
      .then(res => {
        setApiData(res.data)
      })
      .catch(console.error)
      .finally(() => setIsLoading(false))
  }, [])

  const cardPaciente = apiData
    .sort((a: any, b: any) => a.nome > b.nome ? 1 : -1)
    .map((especialista: any) => 
      <Link to={`/especialistas/${especialista.id}`} key={especialista.id}>
        <CardPaciente
          key={especialista.id}
          name={especialista.nome} 
          email={especialista.email}
          telefone={especialista.telefone}
          id={especialista.id} 
          handleClick={() => handleClick(especialista.id)} 
        />
      </Link>)                                

  return (
      <DivComponent>
      <div className="page-container">
        <div className="top-container">
        <NavBar />
        </div>
        {isLoading ? <Loading />
        :
          <div className="content-container">
            <div className="search-container">
              <div className="search-field">
                <span className="search-icon material-icons" onClick={() => console.log(apiData)}>search</span>
                <input type="text"></input>
                <span className="clean-icon material-icons">close</span>
              </div>
            </div>  
            <div className="results-container">
              {cardPaciente}
            </div>  
          </div>
        }
        <div className="bot-container">
          <Menu />
        </div>
          
      </div>
      </DivComponent>
  );
}

export default Especialistas;