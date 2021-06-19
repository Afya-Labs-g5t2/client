import styled from 'styled-components'

export const HomeStyle = styled.div`

.page-container {
     height: 100%;
    .content-container {
        height: 100vh;
        display: block;
        position: relative;
        padding-bottom: 120px; // margin pro centeudo do final ficar acima do botao
        overflow: scroll;
        .container{
            background:E5E5E5;
            padding:1rem;
            .sessao-top{ 
                display: flex;
                text-align: center;
                width:100%;
                margin-top: 2rem;
                justify-content:space-between;
                    .texto_home{ 
                        font-size: 2.5rem;
                        text-align: left;
                        top:3rem;
                        .texto-home h2{
                            font-weight: bold;
                            color:#13132B;
                            font-size: 1.2rem; 
                                    }
                            }
                             .icon{
                                 background:#fff;
                                 font-size: 2rem;
                                  } 
                                         }
                                        .principal{ 
                                            display: block;
                                            width: 100%;
                                            margin-top: 1.5rem;
                                            .line{
                                                width: 100%;
                                                margin-top: -1rem;
                                                height: 0;
                                                border: 0.1px solid #C4C4C4;
                                            }
                                            .titulo {
                                                color:#13132B;
                                                margin-top: 2.2rem;
                                                margin-bottom: 2.3rem;
                                            }

                                                        .card{ 
                                                            background: #c4c4c4;
                                                            width: 100%;
                                                            height:7vh;
                                                            margin-top: 1rem;
                                                            border-radius: 0.6rem;
                                                            text-align: center;
                                                                .card-ul{
                                                                    margin-left: -1.6rem;
                                                                    justify-content: space-around;
                                                                    list-style: none;
                                                                        .card-li{ 
                                                                            display: flex;
                                                                                
                                                                                .card-p{
                                                                                    font-size: 0.9rem;
                                                                                    margin-left: 0.7rem;
                                                                                    font-weight: 600;
                                                                                    margin-top: 1.1rem;
                                                                                    color: #13132B;
                                                                                }  
                                                                            }                                                        
                                                }   
                                        } 
                        }  
            }  
    } 
}      

    @media only screen and (min-width: 700px) {
        .page-container {
            overflow: unset;
            

            .content-container {
                display: block;
                margin-top: 0;
                overflow: scroll;

                .container-wrapper {
                    display: flex;
                    justify-content: center;
                }
            }
        }
        
    }

`

