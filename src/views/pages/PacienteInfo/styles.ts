import styled from 'styled-components'

export const DivComponent = styled.div`
    
.paciente-container {
    height: calc(100vh - 3.5rem - 3.5rem);
    margin: 0 16px;
    padding-bottom: 90px; // margin pro centeudo do final ficar acima do botao
    overflow: scroll;

    .paciente-cover {
        background: var(--background-cover);
        padding: 12px;
        border-radius: 6px;
        margin-top: 1rem;
        color: white;
        cursor: pointer;

        .paciente-main {
            display: flex;
            align-items: center;
            margin-bottom: 12px;

            .photo-container {
                height: 56px;
                width: 56px;
                background: #c4c4c4;
                background-image: url("https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
                background-size: cover;
                border-radius: 9999px;
            }

            .name-container {
                font-size: 1.25rem;
                font-weight: 700;
                margin-left: 12px;
            }
        }

        .quick-info{
            display: flex;
            justify-content: flex-end;

            .quick-sangue {
                display: flex;
                flex-direction: row;

                .sangue-value {
                    margin-left: 12px;
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: hsla(239, 70%, 74%, 1);
                }

                .sangue-sinal {
                    position: relative;
                    bottom: .3125rem; // 25% da altura da fonte
                }
            }
        }
    }

    .info-container {

        .dados-paciente-container {
            margin-top: 1rem;

            .title-wrapper {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

                .dados-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: .25rem;
                }

                .dados-edit {
                    padding: 6px;
                    padding-right: 12px;
                    color: var(--background-dark);
                    cursor: pointer;
                }  
            }

            .dados-container {
                border: 1px solid var(--background-dark);
                border-radius: 9px;
                padding: 6px;
                background-color: var(--background-main);


                div {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 12px;

                    span {

                        &:nth-child(1) {
                            font-weight: 700;
                        }
                    }
                }

                
            }
        }

        .adress-container {
            margin-top: 1rem;

            .title-wrapper {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

                .adress-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: .25rem;
                }

                .dados-edit {
                    padding: 6px;
                    padding-right: 12px;
                    color: var(--background-dark);
                    cursor: pointer;
                }  
            }

            .adress-fields {
                border: 1px solid var(--background-dark);
                border-radius: 9px;
                padding: 6px;
                background-color: var(--background-main);
                padding-right: 9px;

                div {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 6px;

                    span {

                        &:nth-child(1) {
                            font-weight: 700;
                        }
                    }
                }

                .rua-wrapper {
                    display: grid;
                    grid-template-columns: 4fr 1fr;

                    div {

                        &:nth-child(1) {
                            text-overflow: ellipsis;
                            margin-right: 9px;
                        }
                    }
                }

                .cidade-wrapper {
                    display: grid;
                    grid-template-columns: 4fr 1fr;

                    div {

                        &:nth-child(1) {
                            text-overflow: ellipsis;
                            margin-right: 9px;
                        }
                        
                    }
                } 
            }
        }
    }
   }
`