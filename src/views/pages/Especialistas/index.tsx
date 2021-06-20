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
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [totalPagesNumber, setTotalPagesNumber] = useState<number>(0)

  function handleToggle() {
    setShowUser(!showUser)
  }

  function handleClick(id: number) {
    console.log(id)
    console.log(apiData)
    
  }

  useEffect(() => {
    setIsLoading(true)
    api.get(`especialistas?page=${pageNumber}`)
      .then(res => {
        setApiData(res.data.temp)
        setTotalPagesNumber(res.data.pages)
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
      
  function handlePageNavigation(e: any) {

    if (e.target.className.includes('next') && pageNumber <= totalPagesNumber) {
      setIsLoading(true)
      const currentPage = pageNumber + 1
      api.get(`especialistas?page=${currentPage}`)
      .then(res => {
        setPageNumber(value => value + 1)
        setApiData(res.data.temp)
      })
      .catch(console.error)
      .finally(() => setIsLoading(false))
    }

    if (e.target.className.includes('previous') && pageNumber > 1) {
      setIsLoading(true)
      const currentPage = pageNumber - 1
      api.get(`especialistas?page=${currentPage}`)
      .then(res => {
        setPageNumber(value => value - 1)
        setApiData(res.data.temp)
      })
      .catch(console.error)
      .finally(() => setIsLoading(false))
    }
  }

  return (
      <DivComponent>
      <div className="page-container">
        <div className="top-container">
        <NavBar title={`Especialistas`}/>
        </div>
          <div className="content-container">
          {isLoading ? <Loading />
          :
          <>
            <div className="results-container">
              {cardPaciente}
            </div>
            <div className="search-container">
              <div className="navigation-wrapper">
                <div className={`previous-page-container ${pageNumber === 1 ? 'hide-navigation' : ''}`} onClick={handlePageNavigation}>
                  <span className={`material-icons`}>arrow_back_ios</span>
                  <span className="previous-page-text">Anterior</span>
                </div>
                <div className="current-page-container">
                  <span className="current-page-value">Página {pageNumber}</span>
                </div>
                <div className={`next-page-container ${pageNumber === totalPagesNumber ? 'hide-navigation' : ''}`} onClick={handlePageNavigation}>
                  <span className="next-page-text">Próximo</span>
                  <span className={`material-icons`}>arrow_forward_ios</span>
                </div>
              </div>
            </div>    
            </>
          }
          </div>
        <div className="bot-container">
          <Menu />
        </div>
          
      </div>
      </DivComponent>
  );
}

export default Especialistas;