import styled from 'styled-components'

export const DivComponent = styled.div`
    .card-paciente-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: var(--background-main);
        width: 22rem;
        height: 5rem;
        border-radius: 6px;
        padding: 6px;
        margin: .5rem 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        user-select: none;
        cursor: pointer;

        .info-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .name-container {
                display: flex;
                font-weight: 700;
                text-align: left;
            }
        }

        .icon-container {
            display: flex;
            align-items: center;
        }
    }
`