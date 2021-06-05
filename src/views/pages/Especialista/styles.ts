import styled from 'styled-components'

export const DivComponent = styled.div`
    
   .page-container {
       height: 100%;
       
       .content-container {
           height: calc(100vh - 60px - 50px); // expaco que sobra entre o menu de baixo e o nav
           display: block;
           position: relative;
           overflow: hidden;
       }
   }

   @media only screen and (min-width: 500px) {
        .page-container {
            position: relative;
            margin-left: auto;
            width: calc(100% - 90px);
        }
    }
`