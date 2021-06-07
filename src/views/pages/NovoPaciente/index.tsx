import React, { useRef, useState } from 'react';
import Menu from '../../../components/Menu'
import {DivComponent} from './styles'
import NavBar from '../../../components/NavBar';
import { useForm } from "react-hook-form";
import { useToast } from '@chakra-ui/react'

const passwordValidationRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ // ^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$


const NovoPaciente: React.FC = () => {
  const [data, setData] = useState()
  //Refs
  const logradouroInputRef = useRef<HTMLInputElement | null>(null)
  const bairroInputRef = useRef(null)
  const cidadeInputRef = useRef(null)
  const ufInputRef = useRef(null)

  //react-hook-form
  const { register, setValue, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = (data: any) => console.log(data);
  const toast = useToast( )
  const onSubmit = (data: any) => {
    //console.log(data);
    toast({
      title: "Submitted!",
      status: "success",
      duration: 2000,
      isClosable: true
    });
  
    setData(data);
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder='Nome' {...register('nome', { required: 'Digite o primeiro nome' })} />
            {errors.nome && <p>{errors.nome.message}</p>}
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
            <input type='text' placeholder='Email' {...register('email', { required: 'Digite o email' })} />
            {errors.email && <p>{errors.email.message}</p>}
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
            <input type='text' placeholder='Celular' {...register('celular', { required: 'Digite o numero de celular' })} />
            {errors.celular && <p>{errors.celular.message}</p>}
            <input type='text' placeholder='Telefone' {...register('telefone')} />
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
            <input type='text' placeholder='Endereco' {...register('adress', { required: 'Preencha com o endereco' })} />
            {errors.adress && <p>{errors.adress.message}</p>}
            <input type='text' placeholder='Numero' {...register('numero', { required: 'Preencha com o numero' })} />
            {errors.numero && <p>{errors.numero.message}</p>}
            <input type='text' placeholder='Bairro' {...register('bairro', { required: 'Preencha com o bairro' })} />
            {errors.bairro && <p>{errors.bairro.message}</p>}
            <input type='text' placeholder='Cidade' {...register('cidade', { required: 'Preencha com a cidade' })} />
            {errors.cidade && <p>{errors.cidade.message}</p>}
            <input type='text' placeholder='Estado' {...register('uf', { required: 'Preencha com o estado' })} />
            {errors.uf && <p>{errors.uf.message}</p>}

            <input type='submit' value='Salvar'/>
            {/* <input
              style={{ display: "block", marginTop: 20 }}
              type="button"
              onClick={() => reset()}
              value="Custom Reset Field Values & Errors"
            /> */}
          </form>
        </div>
        <div className="bot-container">
          <Menu />
        </div>
          
      </div>
      </DivComponent>
  );
}

export default NovoPaciente;