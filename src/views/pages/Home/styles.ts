import styled from 'styled-components'

export const HomeStyle = styled.div`
    
   .page-container {
       height: 100%;
       
       .content-container {
           height: calc(100vh - 39px - 3.5rem); // expaco que sobra entre o menu de baixo e o nav
           display: block;
           position: relative;
           overflow: hidden;

            .container{
                background:E5E5E5;
                align-items: center;
                text-align: center;
                justify-content: center;
                padding:1rem;

                .nav{
                    display: flex;
                    text-align: center;
                    width:100%;
                    margin-top: 2rem;
                    justify-content: space-around;

                    .texto_home{
                        font-size: 0.8rem;
                        text-align: left;
                        justify-content: center;
                    }

                    .image{
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                    }
                }

                .principal{
                    display: block;
                    width: 100%;
                    margin-top: 5rem;

                    a {
                        color: #fff;

                        button{
                            font-size: 1rem;
                            background: #da4478;
                            color: #fff;
                            width: 90%;
                            height: 8vh;
                            font-weight: bold;
                            padding:0.9rem;
                            border-radius:8%;
                            margin: 1rem;
                            margin-top: 1.2rem;
                            border-color: white;
                            cursor: pointer;
                        }
                    }
                }
                
            } 
       }
   }

   @media only screen and (min-width: 500px) {
        .page-container {
            position: relative;
            margin-left: auto;
            width: calc(100% - 90px);

            .container{
                width:60%;
                margin-left:240px;
                padding:10px;

                .nav{
                    margin-top: 2rem;
                    width:90%;
                    margin-left:45px;

                    .texto_home{
                        font-size: 0.9rem;
                    }
                }

                .principal{
                    margin-bottom:1.5rem;

                    a button{
                        font-size: 1rem;
                        width: 65%;
                        height: 9vh;
                        margin-top: 1.7rem;
                    }
                }

            }
        }
    }
`