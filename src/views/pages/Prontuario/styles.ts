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

                    .search-icon {
                        padding-right: 12px;
                        color: var(--background-dark)
                    }

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

                    .clean-icon {
                        color: var(--background-dark);
                        padding: 0 .5rem;
                        cursor: pointer;
                    }
                }
           }
           
           .results-container {
               display: flex;
               flex-direction: column;
               align-items: center;
               max-height: 100%;
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