import styled from 'styled-components'

export const DivComponent = styled.div`
    .modal-header {

        button {

            line-height: 1;
            text-decoration: none;
            border: none;
            background: none;
            transition: transform 0.2s ease-in-out;

            &:hover {
                transform: scale(1.25)
            }
        }
    }

    .modal-body {
        padding: 2rem;

        form {

            .info-wrapper {
                margin-bottom: 32px;
            }

            .form-group {
                margin-bottom: 16px;

                
            }

            .form-inline {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 16px;

                .form-group {
                    margin: unset;

                    .input-time {
                        width: 65px;
                    }
                }

                .time-pick-wrapper {
                    display: flex;
                    align-items: center;

                    .time-separator {
                        padding-left: 10px;
                        padding-right: 10px;
                        height: 100%;
                    }
                }

                .default-date-picker {
                    display: flex;
                    height: 38px;
                    border: 1px solid #ced4da;
                    appearance: none;
                    border-radius: .25rem;
                }
            }

            
        }

        .modal-footer {

            display: flex;
            justify-content: space-between;
            align-items: center;
            
            .form-group {
                margin: 0;
            }
        }

        .error {
                border: 2px solid red !important;
            }
    }

    .consulta-start-container {
        display: flex;
        justify-content: center;
        align-items: center;

        .consulta-start-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 1;
            background: hsla(108, 68%, 50%, .8);
            height: 3rem;
            width: 60%;
            border-radius: 9px;
            font-size: 1.25rem;
            font-weight: 700;
            color: #fff;
            margin-top: 3rem;
            cursor: pointer;
        }
    }

    @media only screen and (min-width: 700px) {
        .content-container {
            height: 100%;
            overflow: scroll;
        }
    }
`