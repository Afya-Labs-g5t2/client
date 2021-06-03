import styled from 'styled-components'

export const DivComponent = styled.div`
    .menu-container {
        background: var(--background-main);
        height: 60px;
        width: 100%;
        max-width: 100vw;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        bottom: 0;
        left: 0;
        font-size: 12px;
        border-top: solid 1px var(--background-dark);
        z-index: 1;

        .icon-container {
            display: grid;
            grid-template-columns: 1fr;
            place-items: center;
            width: 100%;
            height: 100%;
            align-content: center;
            color: var(--background-dark);

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

    @media only screen and (min-width: 500px) {
        .menu-container {
            position: fix;
            left: 0;
            top: 0;
            height: 100%;
            width: 90px;
            display: flex;
            flex-direction: column;
            border-right: solid 1px var(--background-dark);
        }
    }
`