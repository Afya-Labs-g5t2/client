import styled from 'styled-components'

export const DivComponent = styled.div`
    .bottom-section-wrapper {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        pointer-events: none;

        .create-options-container {
            width: 100%;
            display: flex;
            flex-direction: column;

            .btn-create-container {
                display: flex;
                position: relative;
                right: 20px;
                bottom: 20px;
                justify-content: flex-end;

                .create-options-btn {
                    display: flex;
                    min-width: 40px;
                    min-height: 40px;
                    width: 64px;
                    height: 64px;
                    pointer-events: auto;

                    .icon-create-container {
                        display: flex;
                        position: relative;
                        max-width: 100%;
                        flex-grow: 1;
                        background: var(--red);
                        color: white;
                        border-radius: 9999px;
                        align-items: center;
                        justify-content: center;

                        .create-options-icon {
                            transition: .3s ease-in-out;
                        }

                        .rotate-icon {
                            transform: rotate(45deg);
                        }
                        
                    }
                }

                
            }

            .options-wrapper {
                display:flex;
                position: relative;
                right: 20px;
                bottom: 20px;
                justify-content: flex-end;

                    .options {
                        /* display: none; */
                        opacity: 0;
                        list-style: none;
                        margin: 0 20px;
                        transition: opacity .2s ease-in-out;
                        z-index: 2;
                        pointer-events: none;
                    }

                    li { 
                        transition: all .3s ease-in-out;

                        a {
                            display: flex;
                            padding: 12px;
                            text-align: left;
                            font-size: 1rem;
                            font-weight: 700;
                            line-height: 1;
                            align-items: center; 
                            color: white;
                        }

                        a > span:last-child {
                            margin-left: 9px;
                        }

                        &:hover {
                            transform: scale(1.2);
                            text-shadow: 2px 2px var(--background-dark);
                        }
                    }

                    .show-menu {
                        display: block;
                        opacity: 1;
                        transition: opacity .4s ease-in-out;
                        pointer-events: auto;
                    }

                }

            .options-background {
                position: fixed;
                right: 0;
                bottom: 0;
                width: 0;
                height: 0;
                background: var(--red);
                border-radius: 999px;
                transition: .3s ease-in-out;
                
            }

            .show-options-background {
                width: 150vw;
                height: 150vw;
                max-width: 800px;
                max-height: 800px;
                transform: translate(50%,25%);
            }

            

        }
    
        .menu-container {
            background: var(--background-main);
            height: 3.5rem;
            max-height: 16vh;
            width: 100%;
            max-width: 100vw;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            font-size: 12px;
            border-top: solid 1px var(--background-dark);
            z-index: 1;
            pointer-events: auto;

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

        /* @media only screen and (min-width: 500px) {
            .menu-container {
                all: unset;
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                height: 100%;
                min-width: 90px;
                display: flex;
                flex-direction: column;
                border-right: solid 1px var(--background-dark);
            }
        } */
    }

    @media only screen and (min-width: 500px) {
            .bottom-section-wrapper {
                all: unset;
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                height: 100%;
                min-width: 90px;
                display: flex;
                align-items: flex-end;
                flex-direction: column;
                border-right: solid 1px var(--background-dark);

                .create-options-container {
                all: unset;
                }

                .menu-container {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    top: 0;
                }
            }

        }
`