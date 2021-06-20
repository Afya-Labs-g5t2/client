import styled from 'styled-components'

export const DivComponent = styled.div`
    
   .page-container {
       position: relative;
       height: 100%;
       overflow: hide;
       
       .content-container {
           display: flex;
           flex-direction:column;
           height: calc(100vh - 3.5rem - 3.5rem); // expaco que sobra entre o menu de baixo e o nav
           display: block;
           position: relative;
           overflow: scroll;           

           .search-container {
                margin: 2rem 0;
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: center;
                padding-bottom: 5rem;

                .navigation-wrapper {
                    display: flex;
                    width: 100%;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 12px;

                    .current-page-value {
                        pointer-events: none;
                    }

                    .next-page-container, .previous-page-container {
                        display: flex;
                        align-items: center;
                        cursor: pointer;   

                        .material-icons {
                            cursor: pointer;
                        }
                    }

                    .hide-navigation {
                        visibility: hidden;
                    }
                }
           }

           .results-container {
               display: flex;
               flex-direction: column;
               align-items: center;
               max-height: 100%;
           }
       }
   }

   .card-paciente-container {
        
        &:hover {
            background: hsla(164, 45%, 65%, .6);
        }
   }

   @media only screen and (min-width: 700px) {
        .page-container {
            overflow: unset;

            .content-container {
                display: block;
                margin-top: 0;
                height: 100%;
                overflow: scroll;
                padding-bottom: 5rem;

                .results-container {
                    overflow: scroll;
                }
            }
        }
        
    }
`