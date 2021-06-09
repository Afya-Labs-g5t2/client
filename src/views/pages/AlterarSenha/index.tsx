import React, {useState} from 'react';
import {StyleComponent} from './style';
import Menu from '../../../components/Menu';
import NavBar from '../../../components/NavBar';

const AlterarSenha: React.FC = () => {
    const [senhaAtual,setSenhaAtual]=useState<string>('');
    const [novaSenha,setNovaSenha]=useState<string>('');
    const [confirmarSenha,setConfirmarSenha]=useState<string>('');

const handleConfirmar=()=>{
        if(senhaAtual===''||novaSenha===''||confirmarSenha===''){
          alert('Todos os campos são obrigatórios')
        }
        if(novaSenha===confirmarSenha){
            alert('Senha Confirmada com sucesso')
        }else{
            alert('Senha errada')
        }
}
  return (
      <StyleComponent>
          <div className="top"> 
                <NavBar/> 
          </div>
          <div className="mid">
              <input type="password" name="senhaAtual" 
              onChange={e=>setSenhaAtual(e.target.value)} placeholder="Digite a senha antiga" />

              <input type="password" name="novaSenha" 
              onChange={e=>setNovaSenha(e.target.value)} placeholder="Confirmar senha" />

              <input type="password" name="confirmarSenha" 
              onChange={e=>setConfirmarSenha(e.target.value)} placeholder="Confirmar a nova senha" />

              <button className="submit" onClick={handleConfirmar} type="submit">Confirmar</button>
          </div>
          <div className="bot"> 
              <Menu/>
          </div>
      </StyleComponent>
  )
 }

export default AlterarSenha; 