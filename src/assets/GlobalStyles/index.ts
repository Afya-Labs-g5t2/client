import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root 
    {
        --font-color: #13132B;
        --red: #D31C5B;
        --red-dark: #91133F;
        --background-main: #EFEFEF;
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
    }

    .material-icons.md-18 { font-size: 18px; }
    .material-icons.md-24 { font-size: 24px; }
    .material-icons.md-36 { font-size: 36px; }
    .material-icons.md-48 { font-size: 48px; }

    .material-icons.red { color: #D31C5B; }

`