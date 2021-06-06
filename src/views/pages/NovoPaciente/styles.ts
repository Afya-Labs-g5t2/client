import styled from 'styled-components'

export const DivComponent = styled.div`
    .content-container{
        display: flex;
        justify-content: center;
        margin-top: 5rem;
        
        form {
            display: flex;
            flex-direction: column;
            align-items: center;

            input {
                margin: 12px;
            }

        }
    }
`