import React, { useState } from 'react';
import User from '../User'
import Menu from '../../../components/Menu'
import { IoMenu } from "react-icons/io5";
import { HomeStyle } from './styles';
import { Link } from 'react-router-dom';
import mockData from '../../../mockData'
import { useEffect } from 'react';
import { api } from '../../../services/api';
import { compareAsc, format, parse } from 'date-fns'
import Loading from '../../../components/Loading';


const Home: React.FC = () => {

  const [showUser, setShowUser] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleToggle() {
    setShowUser(!showUser)
  }
  function handleCardClick(event: any) {
    console.log(event.target.id)
  }

  // useEffect(() => {
  //   setIsLoading(true)
  //   api.get(`agendamantos/data/${format(new Date(), "yyyy-MM-dd")}`)
  //     .then(res => {
  //       setApiData(res.data)
  //     })
  //     .catch(console.error).finally(() =>{
  //       console.log(apiData)
  //       setIsLoading(false)
  //     })
  // }, [])

  return (

    <HomeStyle>
      <div className="page-container">
        {isLoading ?
        <Loading />
        :
          <div className="content-container">
            <div className="container-wrapper">
            <header className="container">
              <section className="sessao-top">
                <div className="texto-home">
                  <h1>Clinica</h1>
                  <h2>Medtechnew</h2>
                </div>
                <div>
                  <p onClick={handleToggle} className="icon"><IoMenu /></p>
                </div>
              </section>
              <main className="principal">
                <div className="line"></div>
                <div className="titulo"><h4>Agenda de hoje</h4></div>
                <section>
                  {mockData.agendamento.map(function (data: any) {
                    return (
                      <Link to={`agendamentos/${data.id}`} key={data.id} id={`${data.id}`} onClick={handleCardClick}>
                        <div className="card">
                          <ul className="card-ul">
                            <li className="card-li">
                              <p className="card-p">{data.horario}</p>
                              <p className="card-p">{data.paciente}</p>
                              <p className="card-p">Dr.{data.especialista}</p>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    )
                  })
                  }
                </section>
              </main>
            </header>
            <User close={handleToggle} showComponent={showUser} />
            </div>
          </div>  
      }
      <div className="bot-container">
            <Menu />
      </div>
      </div>
    </HomeStyle>
  );
}
export default Home;