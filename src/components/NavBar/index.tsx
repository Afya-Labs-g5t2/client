import React, { MouseEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { NavBarContent } from './style'

function NavBar() {

  let history = useHistory()

  return(
    <NavBarContent>
      <nav className="nav-container">
        <div className="icon-container" onClick={history.goBack}>
          
            <span className="material-icons md-36">arrow_back</span>
          
        </div>
        <a href="#" className="create-options-btn"></a>
        <div className="title-container">
          <span className="title">{history.location.pathname}</span>
        </div>
      </nav>
    </NavBarContent>
  )
}

export default NavBar;