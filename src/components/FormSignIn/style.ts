import styled from 'styled-components';

export const FormContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  form {
    display: grid;
    padding-top: 15vh;
    z-index : 1;
    
    p {
        font-size: 12px;
        color: var(--red);
        padding-left: 0.4rem;
        margin-top: -10px;
    }
  }

  input{
    padding: 16px;
    margin: 19px 0;
    width: 57.5vh;
  }

  input[type=text], input[type=password] {
    box-sizing: border-box;
    border: 2px solid #a9a5a5;
    border-radius: 1vh;
    outline: none;
  }

  input[type=submit] {
    box-sizing: border-box;
    border-radius: 4vh;
    color: #fff;
    background-color: #D31C5B;
    border-color: transparent;
    position: relative;
    top: 5vh;
    font-weight: bold;
    transition: 0.3s; 
}

input[type=submit]:hover {
  background-color: #FF5A6F;
  cursor: pointer;
}

.loading {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: hsla(100,100%,100%,0.8);
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    pointer-events: none;
    z-index: 2;

    path {
      stroke: var(--red);
    }
  }

  .loading-on {
    pointer-events: none;
  }

@media (max-width: 500px){

  input{
    padding: 10px;
    margin: 15px 0;
    width: 43vh;
  }

  input[type=text], input[type=password] {
    box-sizing: border-box;
    border: 2px solid #a9a5a5;
    border-radius: 1vh;
    outline: none;
  }

  input[type=submit] {
    box-sizing: border-box;
    border-radius: 4vh;
    color: #fff;
    background-color: #D31C5B;
    border-color: transparent;
    position: relative;
    top: 5vh;
    font-weight: bold;
    transition: 0.3s; 
  }
}
`
