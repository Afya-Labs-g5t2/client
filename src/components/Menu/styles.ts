import styled from 'styled-components'

export const DivComponent = styled.div`
    .menu-container {
        background: var(--red);
        height: 60px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        bottom: 0;
        left: 0;
        font-size: 12px;
        z-index: 2;

        .icon-container {
            display: grid;
            grid-template-columns: 1fr;
            place-items: center;
            width: 100%;
            height: 100%;
            align-content: center;
            color: #fff;

            .icon-btn {
                width: 100%;
                height: 100%;
                
                .icon-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            }
        }
    }
`