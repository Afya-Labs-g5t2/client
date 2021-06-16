import styled from 'styled-components';

export const StyleComponent = styled.div`
.mid{
    margin-top:5.7rem;
    justify-items:center;
}
.mid input{
    font-size:1.1rem;
    display:block;
    width: 70%;
    height: 7vh;
    border-radius: 0.7rem;
    margin:1.5rem;
    text-align: center;
    margin-left: 3.7rem;
    
}
.submit{
    font-size:1.1rem;
    border-color: #fff;
    color: #fff;
    background: #d31c5b;
    cursor: pointer;
    width: 70%;
    height: 7vh;
    border-radius: 0.7rem;
    text-align: center;
    margin-left: 3.7rem;
    margin-top:4rem;
}

form{

    p {
        font-size: 12px;
        color: var(--red);
        padding-left: 4rem;
        margin-top: -19px;
    }

}
@media only screen and (min-width: 500px) {
    .mid{
    margin-top:5.7rem;
}
.mid input{
    
    width: 27%;
    height: 7vh;
    margin:1.5rem;
    margin-left: 30rem;
}
.submit{
    width: 27%;
    height: 7vh;
    text-align: center;
    margin-left: 30rem;
}
}  
` 