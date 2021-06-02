import styled from 'styled-components'

export const DivComponent = styled.div`
    .agenda {
        display: block;
        height: 100vh;
    }
    
    .top {
        background: var(--red);
        height: 50px;
        width: auto;
    }

    .mid {
        height: 340px;
        margin-top: 50px;
        display: grid;
        place-items: center;
    }

    .bot {
        height: auto;
        width: auto;
        position: relative;
        bottom: 0;
        left: 0;
    }
`