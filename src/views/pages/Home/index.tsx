import React, { useState} from 'react';
import User from '../User'
import Menu from '../../../components/Menu'
import { IoMenu } from "react-icons/io5";
import { HomeStyle } from './styles';
import { Link } from 'react-router-dom';
import mockData from '../../../mockData'


const Home: React.FC = () => {

  const [showUser, setShowUser] = useState(false);
  function handleToggle() {
    setShowUser(!showUser)
  }
  function handleCardClick(event: any) {
    console.log(event.target.id)
  }

  return (

    <HomeStyle>
      <div className="page-container">

        <div className="content-container">
          <User close={handleToggle} showComponent={showUser} />
          <header className="container">
            <section className="sessao-top">
              <div className="texto_home">
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
              <div>
                {mockData.agendamento.map(function (data: any) {
                  return (
                    <Link to={`agendamentos/${data.id}`} key={data.id} id={`${data.id}`} onClick={handleCardClick}>
                      <div className="card">
                        <ul>
                          <li>
                            <p>{data.horario}</p>
                            <p>{data.paciente}</p>
                            <p>Dr.{data.especialista}</p>
                          </li>
                        </ul>
                      </div>
                    </Link>
                  )
                })
                }
              </div>
            </main>
          </header>
        </div>
        <div className="bot-container">
          <Menu />
        </div>
      </div>
    </HomeStyle>
  );
}
export default Home;