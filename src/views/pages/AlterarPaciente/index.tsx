import React, { useEffect, useRef, useState } from 'react';
import Menu from '../../../components/Menu'
import { DivComponent } from './styles'
import NavBar from '../../../components/NavBar';
import { useForm } from "react-hook-form";
import { api } from '../../../services/api'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useHistory, useParams } from 'react-router-dom';
import Loading from '../../../components/Loading';

interface AddressProps {
  cep: number,
  logradouro: string,
  numero: number,
  bairro: string,
  cidade: string,
  uf: string,
}

interface IUserRegister{
  cpf: string
  nome: string,
  telefone: string,
  celular: string,
  data_nascimento: string,
  email: string,
  tipo_sangue: string,
  endereco: AddressProps,
}

const NovoPaciente: React.FC = () => {
  const [apiData, setApiData] = useState<IUserRegister>({} as IUserRegister)
  const [isLoading, setIsLoading] = useState(false)
  let { id } = useParams<any>()
  console.log(id)
  //Refs
  // const logradouroInputRef = useRef<HTMLInputElement | null>(null)
  // const bairroInputRef = useRef(null)
  // const cidadeInputRef = useRef(null)
  // const ufInputRef = useRef(null)

  //react-hook-form
  const defaultValues = {
    "nome": '',
    "sobrenome": '',
    "tipo_sangue": '',
    "email": '',
    "data_nascimento": '',
    "cpf": '',
    "celular": '',
    "telefone": '',
    "cep": '',
    "logradouro": '',
    "numero": '',
    "bairro": '',
    "cidade": '',
    "uf": '',
  };

  const bloodTypes = ['A+','A-','B+','B-','AB+','AB-','O+','O-']
  const bloodTypesTag = bloodTypes.map((item, i) => <option key={i}>{item}</option>)

  const { register, setValue, getValues, handleSubmit, formState: { errors } } = useForm({ defaultValues, mode: "onBlur" });
  const history = useHistory()


  const onSubmit = (data: FormData) => {
    setIsLoading(true)
    api.put(`/pacientes/${id}`, data)
      .then(
        response => {
          console.log(data)
          toast.success('Dados alterados!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            onClose: history.goBack
          })
        }
      ).catch(err => {
        toast.error("Oops! N??o foi poss??vel alterar paciente", {
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

  useEffect(() => {
    setIsLoading(true)
    api.get(`pacientes/${id}`)
      .then(res => {
        setApiData(res.data)
        const pacienteInfo = res.data

        populatePacienteFields(pacienteInfo)
      })
      .catch(console.error)
      .finally(() => setIsLoading(false))
  }, [])

  async function checkCep(e: any) {
    // console.log(e.target.value);
    const cep = e.target.value
    const urlCep = `https://viacep.com.br/ws/${cep}/json/`
    if (!cep) { return }
    const response = await fetch(urlCep)
    const data = await response.json()

    !data.erro && autoPopulateAdress(data)

  }

  function autoPopulateAdress(data: any) {

    const { logradouro, bairro, localidade, uf } = data

    setValue('logradouro', logradouro, { shouldValidate: true })
    setValue('bairro', bairro, { shouldValidate: true })
    setValue('cidade', localidade, { shouldValidate: true })
    setValue('uf', uf, { shouldValidate: true })
  }

  function blockKeyboardKeys(e: any) {
    var k;
    // e.which: explorer, e.keyCode: mozilla
    if (e && e.which)
      k = e.which;
    else
      k = e.keyCode;
          
    // No IE n??o essa fun????o n??o consegue cancelar tabs, BS, DEL, etc, mas no mozilla sim,
    // por isso precisamos deixar passar as teclas de edi????o.
    // Somente aceita os caracteres 0-9, tab, enter, del e BS
    if ( ((k<48)||(k>57)) && k !== 8 && k !== 9 && k !== 127 && k !== 13 && !((k>34)&&(k<41)) && k !== 46) {
          if(e.ctrlKey && (k === 118 ||k === 99)) {
            e.returnValue = true;
            return true;
          }	
          else {
            e.preventDefault();
            e.returnValue = false;
            return false;
          }	
    }
    return true;
  }

  function createCPFMask(strValue: any) {
    let strTemp = strValue

    strTemp = strValue.replaceAll(".", "");
    strTemp = strValue.replaceAll("-", "");

    if (strTemp.length > 9) {
      strTemp = `${strTemp.substr(0, 3)}.${strTemp.substr(3, 3)}.${strTemp.substr(6, 3)}-${strTemp.substr(9, 2)}`
    }
    else if (strTemp.length > 6) {
      strTemp = `${strTemp.substr(0, 3)}.${strTemp.substr(3, 3)}.${strTemp.substr(6, 3)}`
    }
    else if (strTemp.length > 3) {
      strTemp = `${strTemp.substr(0, 3)}.${strTemp.substr(3, 3)}`
    }


    setValue('cpf', strTemp, { shouldValidate: true })
  }

  function removeCPFMask(){
    let strValue = getValues('cpf')
    let strTemp = strValue

    strTemp = strValue.replaceAll(".", "");
    strTemp = strTemp.replaceAll("-", "");

    setValue('cpf', strTemp, { shouldValidate: false })
  }

  async function populatePacienteFields(pacienteData: IUserRegister) {

    setValue('nome', pacienteData?.nome.split(' ')[0])
    setValue('sobrenome', pacienteData?.nome.replace(`${pacienteData?.nome.split(' ')[0]} `, ''))
    setValue('tipo_sangue', pacienteData?.tipo_sangue)
    setValue('email', pacienteData?.email)
    setValue('data_nascimento', pacienteData?.data_nascimento)
    setValue('cpf', pacienteData?.cpf)
    setValue('celular', pacienteData?.celular)
    setValue('telefone', pacienteData?.telefone)
    setValue('cep', `${pacienteData.endereco?.cep}`)
    setValue('numero', `${pacienteData.endereco?.numero}`)
    setValue('logradouro', `${pacienteData.endereco?.logradouro}`)
    setValue('bairro', `${pacienteData.endereco?.bairro}`)
    setValue('cidade', `${pacienteData.endereco?.cidade}`)
    setValue('uf', `${pacienteData.endereco?.uf}`)
  }

  

  return (
    <DivComponent>
      <div className="page-container">
        <div className="top-container">
          <NavBar title={'Alterar paciente'}/>
        </div>
        {isLoading ? <Loading />
        :
          <div className="content-container">
            <div className="form-wrapper">
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
              <label htmlFor="tipo_sangue">Tipo sangu??neo</label>
              <select className={`form-control`} style={{backgroundColor: 'var(--background-main)'}} {...register('tipo_sangue')} >
                <option value="" >Selecione o tipo sangu??neo</option>
                {bloodTypesTag}
              </select>

              <label htmlFor="email">Email</label>
              <input
                type='text'
                placeholder='Email'
                {...register('email', { 
                  required: 'Digite o email',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Digite um email valido',
                  },
                  })} 
              />
              {errors.email && <p>{errors.email.message}</p>}
              <label htmlFor="data_nascimento">Data de nascimento</label>
              <input type='date' placeholder='Data de Nascimento' {...register('data_nascimento', { required: 'Digite a data de nascimento' })} />
              {errors.data_nascimento && <p>{errors.data_nascimento.message}</p>}
              <label htmlFor="cpf">CPF</label>
              <input
                type='text'
                placeholder='Digite o CPF (somente numeros)'
                {...register('cpf', {
                  required: "Digite um CPF valido",
                  maxLength: 14,
                  pattern: {
                    value: /^([0-9]{3}[.]){2}([0-9]{3}[-])?([0-9]){2}$/, // /^[0-9]{11}$/
                    message: 'Digite apenas 11 digitos',
                  },
                })}
                onKeyDown={blockKeyboardKeys}
                onFocus={removeCPFMask}
                onBlur={() => createCPFMask(getValues('cpf'))}
              />
              {errors.cpf && <p>{errors.cpf.message}</p>}
              <label htmlFor="celular">Celular</label>
              <input
                type='text' 
                placeholder='Celular' 
                {...register('celular', { 
                  required: 'Digite o numero de celular',
                  pattern: {
                    value: /^[0-9]{9,13}$/,
                    message: 'Digite um nomero valido',
                  },
                })} 
                onKeyDown={blockKeyboardKeys}
              />
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
            </form>
            </div>
          </div>
        }
        
        <div className="bot-container">
          <Menu />
        </div>
      </div>
      
    </DivComponent>
  );
}

export default NovoPaciente;