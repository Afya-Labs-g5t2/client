import styled from 'styled-components'

export const DivComponent = styled.div`
    .agenda-container {
        position: relative;
        height: 100%;
        overflow: hide;

        .top {
        }

        .mid {
            display: flex;
            flex-direction:column;
            height: calc(100vh - 3.5rem - 3.5rem); // expaco que sobra entre o menu de baixo e o nav
            display: block;
            position: relative;
            overflow: scroll;      
        }

        .bot {
        }

    }

    @media only screen and (min-width: 700px) {

        .agenda-container {

            .mid {
                display: grid;
                place-items: center;
                height: 100%;
            }
        }
    }
    
`