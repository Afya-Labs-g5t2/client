import React, { useState } from 'react';
import NavBar from '../../../components/NavBar';
import Menu from '../../../components/Menu';
import { StyleComponent } from './style'


const AlterarSenha: React.FC = () => {

    const [senhaAtual,setSenhaAtual]=useState<string>("");
    const [novaSenha,setNovaSenha]=useState<string>("");
    const [confirmarSenha,setConfirmarSenha]=useState<string>("");

    //const error =
   
 const handlesenha = () => {
    if(novaSenha===confirmarSenha){ 
         return console.log('Senha Alterada com Sucesso')         
    }else{
        console.log('Senha inválida');
    }
}

    return (

        <StyleComponent>
            <div className="page-conteiner">
                <div className="top">
                    <NavBar />
                </div>

                <div className="mid">

                    <input placeholder="Senha atual" onChange={e=>setSenhaAtual(e.target.value)} />
                    <input placeholder="Nova senha" onChange={e=>setNovaSenha(e.target.value)} />
                   <input placeholder="Confirmar nova senha" onChange={e=>setConfirmarSenha(e.target.value)} />
                </div>
                 <div>
                     <button className="submit" type="submit" onClick={handlesenha}>CONFIRMAR</button>
                </div> 
                <div className="bot">
                    <Menu />
                </div>
            </div>
        </StyleComponent>
    );
}

export default AlterarSenha;

