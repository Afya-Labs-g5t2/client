import styled from 'styled-components'

export const DivComponent = styled.div`
    .agenda-container {
        display: block;
        height: 100vh;
    }
    
    .top {
    }

    .mid {
        height: 400px;
        display: flex;
        margin: 0 1rem;
        margin-top: 200px;
        justify-content: center;
        
        /* display: grid;
        place-items: center; */

        .calendar-container {
            width: 100%;
            overflow: scroll;
        }
    }

    .bot {
        height: auto;
        width: auto;
        position: relative;
        bottom: 0;
        left: 0;
    }

    @media only screen and (min-width: 500px) {
        .agenda-container {
            position: relative;
            margin-left: auto;
            width: calc(100% - 90px);
        }
    }
`