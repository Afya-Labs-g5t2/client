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

  const [formDataContent, setFormDataContent] = useState<IUserLogin>({} as IUserLogin);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const history = useHistory()

  const defaultValues: IUserLogin = {
    "usuario": "",
    "senha": ""
  };

  const { register, setValue, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues });

  const onSubmit = handleSubmit(data => {

    setIsLoading(true)
      api.post('/session', data)
      .then(
        response => {
          localStorage.setItem("@tokenG5T2Afya", response.data.token)
          toast.success('Login realizado com sucesso! Você está sendo redirecionado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            onClose: () => history.push('/')
          })
        }).catch(err => {
              toast.error("Senha ou login incorretos!", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
            })
          }).finally(() => setIsLoading(false))
  });

  const animationContent = {
    loop: true,
    autoplay: true,
    isStopped: !isLoading,
    animationData: animationData
  }

  return (
    <FormContent>
      <>
        {
          isLoading &&
          <div className="loading" >
            <Lottie
              options={animationContent}
              width={200}
              height={200}
            />
          </div>
        }
        <form onSubmit={onSubmit} autoComplete="off" className={isLoading ? 'loading-on' : ''}>
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