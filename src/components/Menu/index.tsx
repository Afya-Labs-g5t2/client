import React from 'react';

import { DivComponent } from './styles'

const Menu: React.FC = () => {
  return(
    <DivComponent>
      <div className='menu-container'>
        <div className="icon-container home-btn">
          <a href="#" className="icon-btn">
            <div className="icon-wrapper">
              <span className="material-icons">home</span>
              <span className='btn-label'>inicio</span>
            </div>
          </a>
        </div>
        <div className="icon-container agenda-btn">
          <a href="#" className="icon-btn">
            <div className="icon-wrapper">
              <span className="material-icons">calendar_today</span>
              <span className='btn-label'>agenda</span>
            </div>
          </a>
        </div>
        <div className="icon-container paciente-btn">
          <a href="#" className="icon-btn">
            <div className="icon-wrapper">
              <span className="material-icons">person</span>
              <span className='btn-label'>paciente</span>
            </div>
          </a>
        </div>
        <div className="icon-container especialista-btn">
          <a href="#" className="icon-btn">
            <div className="icon-wrapper">
              <span className="material-icons">work</span>
              <span className='btn-label'>especialista</span>
            </div>
          </a>
        </div>
      </div>
    </DivComponent>
  )
}

export default Menu;