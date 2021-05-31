import styled from 'styled-components';

export const HomeStyle = styled.div`
 
*{
  margin: 0;
  padding:0;
  padding:0;
  box-sizing: border-box;
}
   
  .container{
margin-top: 20px;
background:E5E5E5;
align-items: center;
text-align: center;
justify-content: center;
padding:10px;

  }
  .nav{
      display: flex;
      text-align: center;
      width:100%;
      margin-top: 20px; 
      justify-content: space-around;
   
  }
  .nav div{
      margin: 20px;
  }
  .texto_home{
    font-size: 13px;
    text-align: left;
    justify-content: flex-start; 
    margin-right: 50px;
  }
  .image{
      width: 60px;
      height: 60px;
      border-radius: 50%;
      
  }
.principal{
    display: block;
    width: 100%;
    margin-top: 60px;
}

.principal a button{
font-size: 15px;
background: #da4478;
color: #fff;
width: 90%;
height: 8vh;
font-weight: bold;
padding:10px;
border-radius:8%;
margin: 10px;
margin-top: 25px;
border-color: white;
}

@media screen and (min-width:400px){
  
.container{

background:E5E5E5;
align-items: center;
text-align: center;
justify-content: center;
padding:10px;

  }
  .nav{
    margin-top: 2rem;
  }
  .principal{
    margin-bottom:1.5rem

  }
  .texto_home{
    font-size: 1rem;
  }
  .principal a button{
font-size: 1.2rem;
width: 75%;
height: 10vh;
padding:10px;
border-radius:8%;
margin: 10px;
margin-top: 2rem;
}
 
  }
  
`