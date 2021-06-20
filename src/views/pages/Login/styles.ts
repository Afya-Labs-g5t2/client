import styled from 'styled-components'

export const DivComponent = styled.div`
    .container {
        display: flex;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-items: center;

        .logo-component {
            position: absolute;
            margin-top: 5rem;
            width: 15rem;
            height: auto;
        }
     }
 @media only screen and (min-width: 700px) {
     .container {
     }
 }
`;