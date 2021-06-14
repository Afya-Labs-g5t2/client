import styled from 'styled-components'

export const DivComponent = styled.div`
    
    .modal {
        display: flex;
        position: absolute;
        justify-content: center;
        height: 100vh;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 10px;
        background: hsla(0, 100%, 100%, 0.5);

        .modal-dialog {
            position: relative;
            width: 100%;

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
                                padding-left: 6px;
                                padding-right: 6px;
                                height: 100%;
                            }
                        }

                        .default-date-picker {
                            display: flex;
                            height: 38px;
                            border: 1px solid #ced4da;
                            appearance: none;
                            border-radius: .25rem;
                            max-width: 7.5rem;
                            font-size: 1rem;
                            margin-right: 4px;
                        }

                        .default-date-picker::-webkit-calendar-picker-indicator{
                            margin: 0; 
                            -webkit-appearance:none;
                            
                        }
                        
                    }

                    
                }
                .error {
                        border: 2px solid red !important;
                    }
            }
        }
        
    }
`