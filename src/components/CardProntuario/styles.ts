import styled from 'styled-components'

export const DivComponent = styled.div`
    .card-prontuario-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: var(--background-main);
        width: 21.2rem;
        height: auto;
        border-radius: 6px;
        padding: 6px;
        margin: 0.5rem 0 1rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        user-select: none;
        cursor: pointer;
        text-align: justify;
        min-width: 20.5rem;

        .info-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .paciente-container {
                display: flex;
                text-align: left;

                .paciente-value{
                    /* font-weight: 700; */
                }
            }
            
            .especialista-container{
                padding: 1rem;

                .especialista-header{
                    font-weight: bold;
                }

                .especialista-value{
                    font-weight: 500;
                }
            }

            .data-container{
                padding: 0 1rem 3rem;
                display: flex;
                justify-content: space-between;

                .data-header{
                font-weight: bold;
                }

                .data-value{
                  font-weight: 500;
                }
            }
            

            .descricao-container{
                padding: 0 1rem 0;
                
                .descricao-value{
                    font-weight: bold;
                    margin-bottom: 1rem;
                }
                
                p {
                    padding: 1rem 0 1rem;
                }
            }
        }
    }
`