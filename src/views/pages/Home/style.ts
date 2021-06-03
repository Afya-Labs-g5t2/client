import styled from 'styled-components';

export const HomeStyle = styled.div`
 
   
.container{
    background:E5E5E5;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding:1rem;
  }

.nav{
      display: flex;
      text-align: center;
      width:100%;
      margin-top: 2rem;
      justify-content: space-around;
  }

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

.principal{
    display: block;
    width: 100%;
    margin-top: 5rem;
 }
 principal a{
  color: #fff;
 }

.principal a button{
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

@media screen and (min-width:500px){
  
.container{
    width:60%;
    margin-left:240px;
    padding:10px;
}

.nav{
    margin-top: 2rem;
    width:90%;
    margin-left:45px;
  }

.principal{
    margin-bottom:1.5rem
  }

.texto_home{
    font-size: 0.9rem;
  }
  
.principal a button{
    font-size: 1rem;
    width: 65%;
    height: 9vh;
    margin-top: 1.7rem;
  }
}
  
`