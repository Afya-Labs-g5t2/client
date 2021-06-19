import styled from 'styled-components'

export const DivComponent = styled.div`
    
   .page-container {
       position: relative;
       height: 100%;
       
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

                .search-field {
                    width: 80%;
                    max-width: 22.5rem;
                    display: flex;
                    background: #fff;
                    border-radius: 9999px;
                    border: 1px solid var(--background-dark);
                    align-items: center;
                    font-size: 1.125rem;
                    padding: 0 1rem;

                    .search-icon {
                        padding-right: 12px;
                        color: var(--background-dark)
                    }

                    input {
                        width: 100%;
                        outline: none;
                        border: none;
                        line-height: 2rem;
                        font-size: 1rem;
                        word-wrap: break-word;
                        font-family: 'Inter';
                    }

                    .clean-icon {
                        color: var(--background-dark);
                        padding: 0 .5rem;
                        cursor: pointer;
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
            background: hsla(193, 25%, 85%, 0.96);
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
            }
        }
        
    }
`