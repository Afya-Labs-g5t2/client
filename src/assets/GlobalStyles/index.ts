import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root 
    {
        --font-color: #13132B;
        --red: #D31C5B;
        --red-dark: #91133F;
        --background-main: #d7d7d7;
        --background-main-shadow: #EFEFEF;
        --background-dark: #7D7D7D;
        --background-cover: hsla(200,100%,75%,.9);
        --content-container-height: calc(100vh - 3.5rem - 3.5rem);
    }

    *, *:before, *:after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        font-family: 'Inter';
    }

    a, u {
        text-decoration: none;
        color: inherit;

        &:hover {
            color: inherit;
        }
    }

    .material-icons.md-18 { font-size: 18px; }
    .material-icons.md-24 { font-size: 24px; }
    .material-icons.md-36 { font-size: 36px; }
    .material-icons.md-48 { font-size: 48px; }

    .material-icons.red { color: #D31C5B; }

    @media only screen and (min-width: 700px) {
        .app-container {
            display: flex;
            justify-content: center;            
        }
        .page-container {
            display: grid;
            grid-template-columns: 10rem 1fr 90px;
            grid-template-rows: 3.5rem 1fr;
            justify-items: stretch;
            height: 100vh;
            width: 100vw;
            max-width: 1350px;
            

            .top-container {
                grid-column: 2;
                grid-row: 1;
                justify-self: stretch;
                border-right: solid 1px var(--background-dark);
            }

            .content-container {
                grid-column: 2;
                max-width: 1300px;
                width: 100%;
                padding: 0 3rem;
                border-right: solid 1px var(--background-dark);
                scrollbar-width: none;

                &::-webkit-scrollbar {
                    display: none;
                }
            }

            .bot-container {
                grid-column: 1;
                grid-row: 1;
                border-right: solid 1px var(--background-dark);
                padding-left: 1rem;
                height: 100vh;
            }
        }

        * {
            scrollbar-width: none;

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }

    @media only screen and (min-width: 1350px) {
        .page-container {
            display: grid;
            grid-template-columns: 14rem 1fr 90px;
        }
    }

`