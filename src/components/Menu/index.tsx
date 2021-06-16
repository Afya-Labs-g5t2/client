import { DivComponent } from './styles'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ModalAgendamento from '../../components/ModalAgendamento'

function Menu() {

  const [rotateIcon, setRotateIcon] = useState(false)
  const [showModal, setShowModal] = useState(false)

  function handleClick() {
    setRotateIcon(!rotateIcon)
  }

  return(
    <DivComponent>
      <ModalAgendamento showModal={showModal} setShowModal={setShowModal} closeButton={() => setRotateIcon(false)}/>
      <div className="bottom-section-wrapper">
        <div className="create-options-container">
          <div className={`options-wrapper`}>
            <div className={`options-background ${rotateIcon && 'show-options-background'}`}></div>
            <ul className={`options ${rotateIcon && 'show-menu'}`}>
              <li className="items">
                <Link to={`#`} className="item-btn" onClick={() => setShowModal(!showModal)}>  
                  <span className={`material-icons`}>note_add</span>
                  <span>Novo agendamento</span>
                </Link>
              </li>
              <li className="items">
                <Link to={`/pacientes/novo`} className="item-btn" onClick={handleClick}>  
                  <span className={`material-icons`}>person_add</span>
                  <span>Novo paciente</span>
                </Link>
              </li>
              <li className="items">
                <Link to={`/especialistas/novo`} className="item-btn" onClick={handleClick}>  
                  <div className="wrapper-icons">
                    <span className={`material-icons plus-incrementation`}>add</span>
                    <span className={`material-icons`}>work</span>
                  </div>
                  <span>Novo especialista</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="btn-create-container">
            <a href="#" className="create-options-btn" onClick={handleClick}>
              <div className="icon-create-container">
                <span className={`create-options-icon material-icons md-36 ${rotateIcon && 'rotate-icon'}`}>add</span>
              </div>
            </a>
          </div>
        </div>
        <nav className='menu-container'>
          <div className="icon-container home-btn">
            <Link to={`/`} className="icon-btn">
                <div className="icon-wrapper">
                  <span className={`material-icons ${window.location.pathname === '/' && 'red'}`}>home</span>
                  <span className='btn-label' style={{color: `${window.location.pathname === '/' && 'var(--red)'}`}}>inicio</span>
                </div>
            </Link>
          </div>
          <div className="icon-container agenda-btn">
            <Link to={`/agenda`} className="icon-btn">
              <div className="icon-wrapper">
                <span className={`material-icons ${window.location.pathname === '/agenda' && 'red'}`}>calendar_today</span>
                <span className='btn-label' style={{color: `${window.location.pathname === '/agenda' && 'var(--red)'}`}}>agenda</span>
              </div>
            </Link>
          </div>
          <div className="icon-container paciente-btn">
            <Link to={`/pacientes`} className="icon-btn">
              <div className="icon-wrapper">
                <span className={`material-icons ${window.location.pathname.includes('pacientes') && 'red'}`}>person</span>
                <span className='btn-label' style={{color: `${window.location.pathname.includes('pacientes') && 'var(--red)'}`}}>pacientes</span>
              </div>
            </Link>
          </div>
          <div className="icon-container especialista-btn">
          <Link to={`/especialista`} className="icon-btn">
              <div className="icon-wrapper">
                <span className={`material-icons ${window.location.pathname.includes('especialista') && 'red'}`}>work</span>
                <span className='btn-label' style={{color: `${window.location.pathname.includes('especialista') && 'var(--red)'}`}}>especialista</span>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </DivComponent>
  )
}

export default Menu;