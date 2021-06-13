import React, { FormEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Lottie from 'react-lottie';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import animationData from '../../assets/animation/19318-loading-circle.json';
import { FormContent } from './style';
import { useForm } from "react-hook-form";

interface IUserLogin {
  usuario: string;
  senha: string;
}

const FormSignIn: React.FC = () => {

  // const history = useHistory()

  const [formDataContent, setFormDataContent] = useState<IUserLogin>({} as IUserLogin);
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const defaultValues: IUserLogin = {
    "usuario": "",
    "senha": ""
  };

  const { register, setValue, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues });

  const onSubmit = handleSubmit(data => {
    console.log(data)

    setIsLoad(true)
    //     api.post('/senha', data)
    //   .then(
    //     response => {
    //      redirecionar para a tela de home
    //      history.push('/')
    
    //     }
    //   ).catch(err => {
    //     toast.error("Senha ou login incorretos!", {
    //       position: "top-right",
    //       autoClose: 2000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true
    //     })
    //   }
    //   ).finally(() => setIsLoading(false))

  });

  // const handleSubmit = useCallback(
  //   (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     setIsLoad(true)

  //     // api.post('login', formDataContent).then(
  //     //   response => {
  //     //     localStorage.setItem('@tokenAfyaApp', response.data.token)
  //     //     toast.success('Cadastro realizado com sucesso! Você está sendo redirecionado', {
  //     //       onClose: () => history.push('/dash')
  //     //     })
  //     //   }
  //     // ).catch( e => toast.error('Algo deu errado'))
  //     //   .finally( () => setIsLoad(false))

  //     // }, [formDataContent, history]
  //   }, []
  // );

  const animationContent = {
    loop: true,
    autoplay: true,
    isStopped: !isLoad,
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
        <form onSubmit={onSubmit} className={isLoad ? 'loading-on' : ''}>
          <input type="text" placeholder='Login' {...register('usuario', {
            required: "Digite o seu login"
          })} />
          {errors.usuario && <p>{errors.usuario.message}</p>}
          <input type='password' placeholder='Senha' {...register('senha', {
            required: "Digite a sua senha",
            maxLength: { value: 20, message: "Senha está muito longa" },
            minLength: { value: 8, message: "Senha está muito curta" }
          })} />
          {errors.senha && <p>{errors.senha.message}</p>}
          <input type="submit" value="ENTRAR" />
        </form>
      </>
    </FormContent>
  );
}

export default FormSignIn;