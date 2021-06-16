import styled from 'styled-components'

export const DivComponent = styled.div`
    .calendar-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 90px;
        
        .DayPicker-Body {
            

            .DayPicker-Day {
                padding: 0;
                width: 4rem;
                height: 4rem;
                max-width: 4rem;
                max-height: 4rem;

                .circle-agendamento {
                    background-color: var(--red);
                    height: 0.5rem;
                    width: 0.5rem;
                    border-radius: 99999px;
                    margin-right: 4px;
                }
            }

            .DayPicker-Day--selected {
                background-color: hsla(205, 45%, 55%, 0.82);
                border-radius: 0;
            }
        }

        .consultas-selecionadas-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0.5rem;

            .consulta-paciente-card {
                display: flex;
                flex-direction: column;
                background-color: hsla(205, 100%, 87%, 0.88);
                color: hsla(205, 100%, 25%, 1);
                font-weight: 700;
                width: 100%;
                padding: 0.5rem;
                margin: 0.5rem;
                border-radius: 9px;
                
                min-width: 21rem;
                max-width: 27rem;

                cursor: pointer;

                .top-section-wrapper {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin-bottom: 0.5rem;
                }

                & > * {
                    pointer-events: none;
                }
            }
        }
    }
`