import styled from 'styled-components';

export const FormContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  form {
    display: grid;
    padding-top: 15vh;
    padding-right: 6%; 
    z-index : 1;
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

.loading{
  position: fixed;
  top: 0;
  background-color: #d6d6d6a3;
  width: 104%;
  padding-top: 48.8%;
  right: 1px;
  height: 111.3%;
  z-index: 2;
}

.loading-icon{
    position: fixed;
    bottom: 21%;
    left: 41%;
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

  .loading{
    position: fixed;
    top: 0;
    background-color: #d6d6d6a3;
    width: 104%;
    padding-top: 15rem;
    height: 121.3%;
}

.loading-icon{
    position: fixed;
    bottom: 23%;
    left: 20%;
}
}
`
