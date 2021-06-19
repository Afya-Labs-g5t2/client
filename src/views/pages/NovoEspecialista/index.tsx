import React, { useEffect, useRef, useState } from 'react';
import Menu from '../../../components/Menu'
import { DivComponent } from './styles'
import NavBar from '../../../components/NavBar';
import { useForm } from "react-hook-form";
import { api  } from '../../../services/api'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const passwordValidationRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ // ^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$
const emailValidationRegex = /\S+@\S+\.\S+/


const NovoEspecialista: React.FC = () => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  //Refs
  // const logradouroInputRef = useRef<HTMLInputElement | null>(null)
  // const bairroInputRef = useRef(null)
  // const cidadeInputRef = useRef(null)
  // const ufInputRef = useRef(null)

  //react-hook-form
  const defaultValues = {
    "nome": "",
    "sobrenome": "",
    "email": "",
    "data_nascimento": "",
    "cpf": "",
    "celular": "",
    "telefone": "",
    "cep": "",
    "adress": "",
    "numero": "",
    "bairro": "",
    "cidade": "",
    "uf": "",
  };

  const { register, setValue, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues });

  // useEffect(() => {
  //   if (formState.isSubmitSuccessful) {
  //     reset({ defaultValues });
  //   }
  // }, [formState, submittedData, reset]);

  const onSubmit = (data: any) => {
    setIsLoading(true)
    api.post('/especialistas', data)
    
      .then(
        response => {
          // getData()
          console.log(data)
          toast.success('especialista cadastrado com sucesso!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          })
          reset({ ...defaultValues })
        }
      ).catch(err => {
        toast.error("Oops! Não foi possível cadastrar o especialista", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        })

        console.log(err)
        console.log(data)
      }
      ).finally(() => setIsLoading(false))
  };

  async function checkCep(e: any) {
    // console.log(e.target.value);
    const cep = e.target.value
    const urlCep = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(urlCep)
    const data = await response.json()

    !data.erro && autoPopulateAdress(data)

  }

  function autoPopulateAdress(data: any) {

    const { logradouro, bairro, localidade, uf } = data

    setValue('adress', logradouro, { shouldValidate: true })
    setValue('bairro', bairro, { shouldValidate: true })
    setValue('cidade', localidade, { shouldValidate: true })
    setValue('uf', uf, { shouldValidate: true })
  }

  return (
    <DivComponent>
      <div className="page-container">
        <div className="top-Container">
          <NavBar />
        </div>
        <div className="content-container">
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="nome">Nome</label>
            <input className="input-form" type='text' placeholder='Nome' {...register('nome', { required: 'Digite o primeiro nome' })} />
            {errors.nome && <p>{errors.nome.message}</p>}
            <label htmlFor="sobrenome">Sobrenome</label>
            <input type='text' placeholder='Sobrenome' {...register('sobrenome', { required: 'Digite o sobrenome' })} />
            {errors.sobrenome && <p>{errors.sobrenome.message}</p>}
            {/* <input 
              type='password' 
              placeholder='Digite a senha' 
              {...register('password', { 
                required: "Digite a senha",
                pattern: passwordValidationRegex
              })} />
              {errors.password && <p>{errors.password.message}</p>} */}
            <label htmlFor="email">Email</label>
            <input type='text' placeholder='Email' {...register('email', { required: 'Digite o email' })} />
            {errors.email && <p>{errors.email.message}</p>}
            <label htmlFor="data_nascimento">Data de nascimento</label>
            <input type='text' placeholder='Data de Nascimento' {...register('data_nascimento', { required: 'Digite a data de nascimento' })} />
            {errors.data_nascimento && <p>{errors.data_nascimento.message}</p>}
            <label htmlFor="cpf">CPF</label>
            <input
              type='text'
              placeholder='Digite o CPF (somente numeros)'
              {...register('cpf', {
                required: "Digite um CPF valido",
                pattern: {
                  value: /^[\d]{10}$/,
                  message: 'Digite apenas 10 digitos',
                },
              })} />
            {errors.cpf && <p>{errors.cpf.message}</p>}
            <label htmlFor="celular">Celular</label>
            <input type='text' placeholder='Celular' {...register('celular', { required: 'Digite o numero de celular' })} />
            {errors.celular && <p>{errors.celular.message}</p>}
            <label htmlFor="telefone">Telefone</label>
            <input type='text' placeholder='Telefone' {...register('telefone')} />
            <label htmlFor="cep">CEP</label>
            <input
              type='text'
              placeholder='Digite o CEP (somente numeros)'
              {...register('cep', {
                required: "Digite um CEP valido",
                pattern: {
                  value: /^[\d]{8}$/,
                  message: 'Digite apenas 8 digitos',
                },
              })}
              onBlur={checkCep}
            />
            {errors.cep && <p>{errors.cep.message}</p>}
            <label htmlFor="adress">Endereco</label>
            <input type='text' placeholder='Endereco' {...register('adress', { required: 'Preencha com o endereco' })} />
            {errors.adress && <p>{errors.adress.message}</p>}
            <label htmlFor="numero">Numero</label>
            <input type='text' placeholder='Numero' {...register('numero', { required: 'Preencha com o numero' })} />
            {errors.numero && <p>{errors.numero.message}</p>}
            <label htmlFor="bairro">Bairro</label>
            <input type='text' placeholder='Bairro' {...register('bairro', { required: 'Preencha com o bairro' })} />
            {errors.bairro && <p>{errors.bairro.message}</p>}
            <label htmlFor="cidade">Cidade</label>
            <input type='text' placeholder='Cidade' {...register('cidade', { required: 'Preencha com a cidade' })} />
            {errors.cidade && <p>{errors.cidade.message}</p>}
            <label htmlFor="uf">UF</label>
            <input type='text' placeholder='Estado' {...register('uf', { required: 'Preencha com o estado' })} />
            {errors.uf && <p>{errors.uf.message}</p>}

            <input className='btn-form' type='submit' value='Salvar' />
            {/* <input
              style={{ display: "block", marginTop: 20 }}
              type="button"
              onClick={() => reset()}
              value="Custom Reset Field Values & Errors"
            /> */}
          </form>
          <ToastContainer />
        </div>
        <div className="bot-container">
          <Menu />
        </div>
      </div>
      
    </DivComponent>
  );
}

export default NovoEspecialista;