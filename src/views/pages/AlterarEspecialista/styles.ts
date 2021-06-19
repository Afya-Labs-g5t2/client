import styled from 'styled-components'

export const DivComponent = styled.div`
    .content-container{
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        padding: 0 2rem;
        
        form {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-bottom: 160px;

            label {
                font-weight: 700;
                justify-content: left;
                margin-top: 18px;
                margin-bottom: 6px;
            }

            input {
                margin: 0;
                border: none;
                background-color: var(--background-main);   
                font-family: 'Inter';
                line-height: 2;
                padding: 4px;
                outline: none;

            }

            p {
                font-size: 12px;
                color: var(--red);
            }

            .btn-form {
                margin-top: 16px;
                background: hsla(110,68%,50%,1);
                height: 3rem;
                border-radius: 9px;
                font-size: 1.25rem;
                font-weight: 700;
                color: white;
                cursor: pointer;
                transition: 0.3s;

                &:hover {
                    background: hsla(110,58%,50%,1);
                }
            }
        }
    }
`