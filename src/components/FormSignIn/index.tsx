import React, { FormEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Lottie from 'react-lottie';
import { toast } from 'react-toastify';
import api from '../../services/api';
import animationData from '../../assets/animation/19318-loading-circle.json';
import { FormContent } from './style';

interface IUserLogin {
  usuario: string;
  senha: string;
}

const FormSignIn: React.FC = () => {

  // const history = useHistory()

  const [formDataContent, setFormDataContent] = useState<IUserLogin>({} as IUserLogin);
  const [isLoad, setIsLoad] = useState<boolean>(true);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoad(true)

      // api.post('login', formDataContent).then(
      //   response => {
      //     localStorage.setItem('@tokenAfyaApp', response.data.token)
      //     toast.success('Cadastro realizado com sucesso! Você está sendo redirecionado', {
      //       onClose: () => history.push('/dash')
      //     })
      //   }
      // ).catch( e => toast.error('Algo deu errado'))
      //   .finally( () => setIsLoad(false))

      // }, [formDataContent, history]
    }, []
  );

  const animationContent = {
    loop: true,
    autoplay: true,
    isStopped:!isLoad,
    animationData: animationData
  }

  return (

    <FormContent>
      <>
        {
          isLoad &&
          <div className="loading" >
            <Lottie 
              options={animationContent}
              width={200}
              height={200}
            /> 
          </div>
        } 
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Login" onChange={e => setFormDataContent({ ...formDataContent, usuario: e.target.value })} />
          <input type="password" name="password" placeholder="Senha" onChange={e => setFormDataContent({ ...formDataContent, senha: e.target.value })} />
          <input type="submit" value="ENTRAR" />
        </form>

      </>
    </FormContent>


  );
  // return(
  //   <div>
  //     <h1>Form Component Signin</h1>
  //   </div>
  // );


}

export default FormSignIn;