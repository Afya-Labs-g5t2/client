import styled from 'styled-components'

export const SectionComponent = styled.section`
    .container {
        background: pink;
        height: 100vh;
        width: 85vw;
        position: absolute;
        right: 0;
        top: 0;
        padding-top: 20%;
        border: 1px solid;
        z-index: 9;
        transition: transform .3s;
        transform: translateX(100%);

        .top-section {
            display: flex;
            flex-direction: row;
            font-weight: 800;
            font-size: 1.75rem;
            padding-left: 16px;
            padding-right: 16px;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #C4C4C4;

            .icon {
                margin-right: 16px;
                margin-top: 6px;
            }
        }

        .info-section {
            padding: 16px;
            align-items: center;
            font-weight: 400;
            border-bottom: 1px solid #C4C4C4;

            .photo-container {
                height: 56px;
                width: 56px;
                margin-bottom: 12px;
                background: #c4c4c4;
                background-image: url("https://images.pexels.com/photos/3692749/pexels-photo-3692749.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
                background-size: cover;
                border-radius: 9999px;
            }

            .user-name {
                font-weight: 700;
            }
        }

        .action-section {
            margin: 16px;
            display: flex;
            flex-direction: row;

            .icon {
                margin-right: 16px;
            }
        }

        .btn-container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1.5rem;

            .btn {
                display: flex;
                width: 10rem;
                height: 2.125rem;
                border-radius: 9px;
                background: var(--red);
                align-items: center;
                justify-content: center;
                
                .btn-txt {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: white;
                }
            }
        }
    }

    .show-component {
        transform: translateX(0);
    }

    @media only screen and (min-width: 500px) {
        .container {
            position: relative;
            padding-top: unset;
            width: 100%;
        }
        
    }
`