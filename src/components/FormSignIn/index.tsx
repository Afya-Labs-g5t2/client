import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Lottie from 'react-lottie';
import { toast, ToastContainer } from 'react-toastify';
import { api } from '../../services/api';
import animationData from '../../assets/animation/19318-loading-circle.json';
import { FormContent } from './style';
import { useForm } from "react-hook-form";
import Loading from "../Loading"

interface IUserLogin {
  login: string;
  senha: string;
}

const FormSignIn: React.FC = () => {

  const [formDataContent, setFormDataContent] = useState<IUserLogin>({} as IUserLogin);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const history = useHistory()

  const defaultValues: IUserLogin = {
    "login": "",
    "senha": ""
  };

  const { register, setValue, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues });

  const onSubmit = handleSubmit(data => {

    setIsLoading(true)
    api.post('/session', data)
    .then(
      response => {
        localStorage.setItem("@tokenG5T2Afya", response.data.token)
        localStorage.setItem("@loginAfya", response.data.login)
        localStorage.setItem("@idUserAfya", response.data.id)
        localStorage.setItem("@usernameAfya", response.data.nome)
        toast.success('Login realizado com sucesso!', {
          autoClose: 2000
        })
        history.push('/')
      }).catch(err => {
            toast.error("Senha ou login incorretos!")
        }).finally(() => {
          setIsLoading(false)
          history.go(0)
        })
  });


  return (
    <FormContent>
      <>
        {
          isLoading &&
          <Loading />
        }
        <form onSubmit={onSubmit} autoComplete="off" className={isLoading ? 'loading-on' : ''}>
          <input type="text" placeholder='Login' {...register('login', {
            required: "Digite o seu login"
          })} />
          {errors.login && <p>{errors.login.message}</p>}
          <input type='password' placeholder='Senha' {...register('senha', {
            required: "Digite a sua senha",
            maxLength: { value: 20, message: "Senha está muito longa" },
            minLength: { value: 4, message: "Senha está muito curta" }
            })}
          />
          {errors.senha && <p>{errors.senha.message}</p>}
          <input type="submit" value="ENTRAR" />
        </form>
      </>
    </FormContent>
  );
}

export default FormSignIn;