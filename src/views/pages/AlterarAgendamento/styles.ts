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
        .error {
                border: 2px solid red !important;
            }
    }
`