import React, { MouseEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { NavBarContent } from './style'

interface NavProps {
  title: string;
}

function NavBar(props: NavProps) {

  let history = useHistory()
  let addressPath = history.location.pathname.replace('/', '')

  return(
    <NavBarContent>
      <nav className="nav-container">
        <div className="icon-container" onClick={history.goBack}>
            <span className="material-icons md-36">arrow_back</span>
        </div>
        <div className="create-options-btn"></div>
        <div className="title-container">
          {/* <span className="title">{addressPath.charAt(0).toUpperCase() + addressPath.slice(1)}</span> */}
          <span className="title">{props.title}</span>
        </div>
      </nav>
    </NavBarContent>
  )
}

export default NavBar;