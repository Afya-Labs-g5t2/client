import styled from 'styled-components'

export const NavBarContent = styled.nav`
  .nav-container {
    position: sticky;
    height: 55px;
    width: 100%;
    background: #CC849DF7;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.25rem;
    padding: 0 16px;
    z-index: 2;

    .icon-container {
      display: flex;
      cursor: pointer;
      align-items: center;
    }
  }
`