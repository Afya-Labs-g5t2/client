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

                    .form-group {
                        margin-bottom: 16px;
                    }
                }
            }
        }
        
    }
`