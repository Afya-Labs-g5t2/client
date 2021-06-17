import styled from 'styled-components'

export const DivComponent = styled.div`
    
   .page-container {
       position: relative;
       height: 100%;
       overflow: hide;
       
       .content-container {
           display: flex;
           flex-direction:column;
           height: calc(100vh - 60px - 50px); // expaco que sobra entre o menu de baixo e o nav
           display: block;
           position: relative;
           overflow: scroll;

           form {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-bottom: 160px;
           
                label {
                    font-weight: 700;
                    justify-content: left;
                    margin: 18px auto;
                }

                input {
                    margin: 0 auto;
                    border: none;
                    background-color: var(--background-main);   
                    font-family: 'Inter';
                    line-height: 2;
                    padding: 4px;
                    outline: none;

                }
           }

           .btn-form {
                margin-top: 16px;
                background: hsla(110,68%,50%,1);
                height: 3rem;
                border-radius: 9px;
                font-size: 1.25rem;
                font-weight: 700;
                color: white;
                cursor: pointer;
                transition: 0.3s;

                &:hover {
                    background: hsla(110,58%,50%,1);
                }
            }

           .header-medical-container{
                margin: 1rem 0;
                display: flex;
                width: 100%;
                align-items: center;
                flex-direction: column;
                
               .header-medical-item{
                    width: 80%;
                    max-width: 22.5rem;
                    min-width: 20.5rem;
                    
                    p {
                       font-weight: bold;
                       margin:10px
                       }

                    span{
                        font-weight: 500;
                        }
                    }               
           }

           .search-container {
                margin: 2rem 0;
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: center;

                .search-field {
                    width: 80%;
                    max-width: 22.5rem;
                    min-width: 20.5rem;
                    display: flex;
                    background: #fff;
                    border-radius: 5px;
                    border: 1px solid var(--background-dark);
                    align-items: center;
                    font-size: 1.125rem;
                    padding: 0 1rem;

                    input {
                        width: 100%;
                        outline: none;
                        border: none;
                        line-height: 2.5rem;
                        font-size: 1rem;
                        word-wrap: break-word;
                        font-family: 'Inter';
                    }

                    select {
                        width: 6.4rem;
                        padding: 12px 0px 10px;
                        border: none;
                        position: relative;
                        left: 1rem;
                        font-family: 'Inter';
                        margin-left: -1rem;
                        border-radius: 0.33rem;
                        text-align-last:center;
                    }

                }
            }
           
           .results-container {
               display: flex;
               flex-direction: column;
               align-items: center;
               max-height: 100%;

               .new-descricao{
                   display: flex;
                   justify-content: center;
                   flex-direction: column;
                   align-items:center;
                   width: 80%;
                   max-width: 22.5rem;
                   min-width: 20.5rem;
                  
                   .header-new-descricao{
                       font-weight: bold;
                    }
                   
                    form {
                        width: 80%;
                        height: 14rem;
                    
                        .input-descricao-field{
                            width: 100%;
                            height: 100%;
                            margin: 1rem 0 1rem;
                       
                            ::placeholder{
                                position: absolute;
                                margin: 10px;
                                top: 0;
                                left: 0;
                            }
                        }
                        .div-button{
                            height: 6rem;
                            padding-top: 1rem;
                    
                            .button-salvar{
                            width: 100%;
                            height: 3rem;
                            background-color: #4CD62B;
                            color: #fff;
                            border: none;
                            box-shadow: 2px 1.4px 4px #404040;
                            border-radius: 5px;
                            font-weight: bold;
                            font-size: 1.1rem;

                            }

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
        }
    }
`