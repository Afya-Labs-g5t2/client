import React, { useState } from 'react';
import { SectionComponent } from './styles'

interface UserProps {
  showComponent: boolean;
  close: () => void;
}

function User(props: UserProps){

  // const [showComponent, setShowComponent] = useState(true)

  let userName = 'Juliana Jirkowski'
  let userEmail = 'j.jirkowski@gmail.com'

  // function handleClose() {
  //   setShowComponent(!showComponent)
  // }
  

  return (
    
    <SectionComponent> 
      <div className={`container${props.showComponent ? ' show-component' : ''}`}>
        <div className="top-section">
          <span>Perfil</span>
          <div className="icon" onClick={props.close}>
           <span className="material-icons md-36" >close</span>
          </div>
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
          <div className="icon">
            <span className="material-icons">vpn_key</span>
          </div> 
          <span>Alterar Senha</span>
        </div>
        <div className="btn-container btn">
          <a href="/" className="btn-anchor" onClick={() => localStorage.removeItem('@tokenG5T2Afya')}>
            <span className="btn-txt">Sair</span>
          </a>
        </div>
      </div>
      </SectionComponent>    
  );
}

export default User;