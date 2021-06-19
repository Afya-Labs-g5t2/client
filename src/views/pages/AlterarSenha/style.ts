import styled from 'styled-components';

export const StyleComponent = styled.div`
.mid{
    .form-wrapper {
        display: flex;
        justify-content: center;
    }
    form{
        margin-top: 5rem;
        max-width: 600px;

        input{
            font-size:1.1rem;
            display:block;
            width: 20rem;
            height: 3rem;
            border-radius: 0.7rem;
            margin:1.5rem;
            text-align: center;
            
        }
        .submit-btn{
            font-size:1.1rem;
            border-color: #fff;
            color: #fff;
            background: #d31c5b;
            cursor: pointer;
            width: 20rem;
            height: 7vh;
            border-radius: 0.7rem;
            text-align: center;
            margin-top:4rem;
        }

    }
}

@media only screen and (min-width: 700px) {
        .content-container {
            height: 100%;
        }
    }  
` 