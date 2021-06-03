import { DivComponent } from './styles'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Menu() {

  const [rotateIcon, setRotateIcon] = useState(false)

  function handleClick() {
    console.log('menu clicked')
    setRotateIcon(!rotateIcon)
  }
  return(
    <DivComponent>
      <div className="bottom-section-wrapper">
        <div className="create-options-container">
          <div className={`options-wrapper`}>
            <div className={`options-background ${rotateIcon && 'show-options-background'}`}></div>
            <ul className={`options ${rotateIcon && 'show-menu'}`}>
              <li className="items">
                <Link to={`/`} className="item-btn">  
                  <span className={`material-icons`}>home</span>
                  <span>home</span>
                </Link>
              </li>
              <li className="items">
                <Link to={`/agenda`} className="item-btn">  
                  <span className={`material-icons`}>home</span>
                  <span>agenda</span>
                </Link>
              </li>
              <li className="items">
                <Link to={`/paciente`} className="item-btn">  
                  <span className={`material-icons`}>home</span>
                  <span>paciente</span>
                </Link>
              </li>
              <li className="items">
                <Link to={`/especialista`} className="item-btn">  
                  <span className={`material-icons`}>home</span>
                  <span>especialista</span>
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
        </nav>
      </div>
    </DivComponent>
  )
}

export default Menu;