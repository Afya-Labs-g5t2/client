import styled from 'styled-components';

export const FormContent = styled.div`
    .loading {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: hsla(100,100%,100%,0.8);
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        pointer-events: none;
        z-index: 10;

        path {
        stroke: var(--red);
        }
    }

    .loading-on {
        pointer-events: none;
    }
`