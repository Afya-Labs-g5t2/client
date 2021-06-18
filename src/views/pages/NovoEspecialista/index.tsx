import React, { useEffect, useRef, useState } from 'react';
import Menu from '../../../components/Menu'
import { DivComponent } from './styles'
import NavBar from '../../../components/NavBar';
import { useForm } from "react-hook-form";
import { api } from '../../../services/api'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ProfissoesProps{
  "id":number,
  "profissao":string
}


const NovoEspecialista: React.FC = () => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [profissoesList, setProfissoesList] = useState<[ProfissoesProps] | []>([])
  const [profissaoSelected, setProfissaoSelected] = useState<string>("")

  //react-hook-form
  const defaultValues = {
    "nome": "",
    "sobrenome": "",
    "email": "",
    "especialidade": "",
    "registro": "",
    "celular": "",
    "telefone": "",
    "cep": "",
    "logradouro": "",
    "numero": "",
    "bairro": "",
    "cidade": "",
    "uf": "",
    "profissao": "",
    "id_profissao": "",
  };

  const { register, setValue, getValues, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues });

  useEffect(() => {
    api.get("profissoes").then(res => {
      setProfissoesList(res.data)
    }).catch(console.error)
  }, []);

  const profissaoListSorted = profissoesList.sort((a, b) => a.profissao > b.profissao ? 1 : -1).map((el: any) => <option key={el.id}>{el.profissao}</option>)

  const onSubmit = (data: FormData) => {
    setIsLoading(true)
    let newData
    if (getValues('especialidade') === 'Outra') {
      newData = {...data, id_profissao: getValues('id_profissao')}
    } else {
      const idProfissao: any = profissoesList.find(item => item.profissao === profissaoSelected)?.id
      newData = {...data, id_profissao: idProfissao}
      // data.set('id_profissao', idProfissao || "")
    }
    api.post('/enderecos', {...newData, nome: `${getValues('nome')} ${getValues('sobrenome')}`})
      .then(
        response => {
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
      }
      ).finally(() => setIsLoading(false))
  };

  async function checkCep(e: any) {
    const cep = e.target.value
    const urlCep = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(urlCep)
    const data = await response.json()

    !data.erro && autoPopulateAdress(data)

  }

  async function addNewProfissao() {
    const newProfissao = getValues('profissao')
    const response = await api.post('/profissoes', {"profissao": newProfissao})
    const data = await response.data.id

    setValue('id_profissao', data, { shouldValidate: false })
  }

  function autoPopulateAdress(data: any) {

    const { logradouro, bairro, localidade, uf } = data

    setValue('logradouro', logradouro, { shouldValidate: true })
    setValue('bairro', bairro, { shouldValidate: true })
    setValue('cidade', localidade, { shouldValidate: true })
    setValue('uf', uf, { shouldValidate: true })
  }

  function handleChange() {
    setProfissaoSelected(getValues('especialidade'))
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
            <label htmlFor="especialidade">Especialidade</label>
            <select
              className={`form-control`} 
              {...register('especialidade')}
              onBlur={handleChange}
            >
              <option value={profissaoSelected}  disabled>Selecione a especialidade</option>
              {profissaoListSorted}
              <option>Outra</option>
            </select>
            {getValues('especialidade') === 'Outra' &&
              <>
                <input type='text' placeholder='Nova especialidade' {...register('profissao', { required: 'Digite a nova especialidade' })} onBlur={addNewProfissao}/>
                {errors.profissao && <p>{errors.profissao.message}</p>}
              </>
            }
            {/* <label htmlFor="especialidade">Especialidade</label>
            <input type='text' placeholder='especialidade' {...register('profissao', { required: 'Digite a especialidade' })} />
            {errors.profissao && <p>{errors.profissao.message}</p>} */}
            <label htmlFor="email">Email</label>
            <input type='text' placeholder='Email' {...register('email', { required: 'Digite o email' })} />
            {errors.email && <p>{errors.email.message}</p>}
            <label htmlFor="registro">Registro</label>
            <input
              type='text'
              placeholder='Digite o Registro'
              {...register('registro', {
                required: "Digite um Registro valido",
                pattern: {
                  value: /^[\d]{6}-[A-Z]{2}$/,
                  message: 'Digite 6 digitos seguidos pelo UF',
                },
              })} />
            {errors.registro && <p>{errors.registro.message}</p>}
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
            <label htmlFor="logradouro">Endereco</label>
            <input type='text' placeholder='Endereco' {...register('logradouro', { required: 'Preencha com o endereco' })} />
            {errors.logradouro && <p>{errors.logradouro.message}</p>}
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