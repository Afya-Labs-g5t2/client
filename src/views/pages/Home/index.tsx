
import React, { useState } from 'react';
import User from '../User'
import Menu from '../../../components/Menu'
import { AiOutlineCalendar } from "react-icons/ai";
import { IoPersonAddOutline } from "react-icons/io5";
import { BiUserPin } from "react-icons/bi";
import { RiWalletLine } from "react-icons/ri";
import { HomeStyle } from './styles';


const Home: React.FC = () => {

  const saudacao="Olá,";
  const nome="Juliana Jirkowski";

  const [showUser, setShowUser] = useState(false)

  function handleToggle() {
    setShowUser(!showUser)
  }
  
    return (
      <HomeStyle>
        <div className="page-container">
          <div className="top-container">
            <h1 onClick={handleToggle}>Home</h1>
          </div>
          <div className="content-container">   
            <User close={handleToggle} showComponent={showUser}/>
            <header className="container">      
              <nav className="nav">
                <div className="texto_home">
                <h3>{saudacao}</h3>
                  <h2>{nome}</h2>
                </div>
                <div>
                  <img className="image" src="https://static1.purebreak.com.br/articles/3/87/16/3/@/328369-filme-mulher-maravilha-1984-confira-o-300x254-1.jpeg" alt="" />
                </div>
              </nav>

              <main className="principal">
                <a href="#"><button><AiOutlineCalendar /> CONSULTAR AGENDA</button></a>
                <a href="#"><button><IoPersonAddOutline /> CADASTRO PACIENTE</button></a>
                <a href="#"><button><BiUserPin /> CONSULTAR PRONTUÁRIO</button></a>
                <a href="#"> <button><RiWalletLine /> NOVO PRONTUÁRIO</button></a>
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