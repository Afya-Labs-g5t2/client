import styled from 'styled-components'

export const NavBarContent = styled.nav`
  .nav-container {
    position: sticky;
    height: 55px;
    width: 100%;
    background: var(--background-main);
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 800;
    padding: 0 16px;
    border-bottom: solid 1px var(--background-dark);
    user-select: none;
    z-index: 2;

    .icon-container {
      display: flex;
      cursor: pointer;
      align-items: center;
      color: #000;
    }

    .title-container {
      margin: 0 12px
    }
  }
`