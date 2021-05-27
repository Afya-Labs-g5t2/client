import styled from 'styled-components';

export const FormContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  form {
    display: grid;
    width: 30%;
    padding-top: 15vh;
    padding-right: 8vh;  
    }

  input[type=text], input[type=password] {
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #a9a5a5;
    border-radius: 1vh;
    outline: none;
  }

  input[type=submit] {
    padding: 12px 20px;
    margin: 8px 0;
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
`
