import { DivComponent } from './styles'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Menu() {

  function handleClick() {
    console.log(window.location.pathname)
  }
  return(
    <DivComponent>
      <div className='menu-container'>
        <div className="icon-container home-btn">
          <Link to={`/`} className="icon-btn" onClick={handleClick}>
              <div className="icon-wrapper">
                <span className={`material-icons ${window.location.pathname === '/' && 'red'}`}>home</span>
                <span className='btn-label'>inicio</span>
              </div>
          </Link>
        </div>
        <div className="icon-container agenda-btn">
          <Link to={`/agenda`} className="icon-btn">
            <div className="icon-wrapper">
              <span className={`material-icons ${window.location.pathname === '/agenda' && 'red'}`}>calendar_today</span>
              <span className='btn-label'>agenda</span>
            </div>
          </Link>
        </div>
        <div className="icon-container paciente-btn">
          <Link to={`/paciente`} className="icon-btn">
            <div className="icon-wrapper">
              <span className={`material-icons ${window.location.pathname === '/paciente' && 'red'}`}>person</span>
              <span className='btn-label'>paciente</span>
            </div>
          </Link>
        </div>
        <div className="icon-container especialista-btn">
        <Link to={`/especialista`} className="icon-btn">
            <div className="icon-wrapper">
              <span className={`material-icons ${window.location.pathname === '/especialista' && 'red'}`}>work</span>
              <span className='btn-label'>especialista</span>
            </div>
          </Link>
        </div>
      </div>
    </DivComponent>
  )
}

export default Menu;