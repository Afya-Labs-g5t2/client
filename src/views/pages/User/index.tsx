import React from 'react';
import { SectionComponent } from './styles'

const User: React.FC = () => {

  let userName = 'Juliana Jirkowski'
  let userEmail = 'j.jirkowski@gmail.com'

  return (
    <SectionComponent> 
      <div className="container">
        <div className="top-section">
          <span>Perfil</span>
          <a href="" className="icon">
           <span className="material-icons md-36">close</span>
          </a>
        </div>
        <div className="info-section">
          <div className="photo-container"></div>
          <div className="user-name">
            <span>{userName}</span>
          </div>
          <div className="user-email">
            <span>{userEmail}</span>
          </div>
        </div>
        <div className="action-section">
          <a href="" className="icon">
            <span className="material-icons">vpn_key</span>
          </a> 
          <span>Alterar Senha</span>
        </div>
        <div className="btn-container">
          <a href="" className="btn">
            <span className="btn-txt">Sair</span>
          </a>
        </div>
      </div>
    </SectionComponent>
  );
}

export default User;