import styled from 'styled-components'

export const DivComponent = styled.div`
    .container {
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;

        .logo-component {
            margin: 3rem 0;
            width: 15rem;
            height: auto;
        }
     }
 @media only screen and (min-width: 700px) {
     .container {
     }
 }
`;