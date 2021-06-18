import React, { useState, useEffect } from 'react';
import User from '../User'
import Menu from '../../../components/Menu'
import { DivComponent } from './styles'
import NavBar from '../../../components/NavBar';
import CardProntuario from '../../../components/CardProntuario'
import mockProntuario from '../../../mockProntuarios';
import mockGetProntID from '../../../mockGetProntID';
import { api } from '../../../services/api'
import { toast, ToastContainer } from 'react-toastify'
import { useForm } from "react-hook-form";
import { useParams  } from 'react-router';


interface Iprontuario {
  id:number,
  data_abertura: string,
  id_paciente: number|string,
  paciente_prontuario: {
    nome: string
  }
}

const Prontuario: React.FC = () => {

  const [data, setData] = useState()
  const [showUser, setShowUser] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  // const [prontuario, setProntuario]= useState<Iprontuario>({} as Iprontuario);

  let { id } = useParams<any>()

  // function handleToggle() {
  //   setShowUser(!showUser)
  // }


  //pra quando API tiver funcionando.  mockGetProntID seria substituido por prontuario
  // useEffect(
  //   () => {
  //   api.get(`/prontuarios/${id}`)
  //   .then(res => setProntuario(res.data))
  //   .catch(console.error)
  // },[id])

  function handleClick(id: number) {
    console.log(id)
  }

   //react-hook-form
   const defaultValues = {
    "data_abertura": "",
  };

  const {register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues, mode: "onBlur" });

  const onSubmit = (data: FormData) => {
    setIsLoading(true)
    api.post('/prontuarios', data)
      .then(
        response => {
          // getData()
          console.log(data)
          toast.success('Prontuário aberto com sucesso!', {
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
        toast.error("Oops! Não foi possível abrir o prontuário", {
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

  const prontuario1 = mockGetProntID.id_paciente.toString() 
  const date = new Date(mockGetProntID.data_abertura).toLocaleDateString('pt-br').slice(0,10);
  
  const cardProntuario = mockProntuario.prontuarios
    .sort((a, b) => a.nomeEspecialista > b.nomePaciente[0] ? 1 : -1)
    .map(prontuario => <CardProntuario
      key={prontuario.id}
      nomePaciente={prontuario.nomePaciente}
      nomeEspecialista={prontuario.nomeEspecialista}
      dataProntuario={prontuario.dataProntuario}
      id={prontuario.id}
      handleClick={() => handleClick(prontuario.id)}
    />)


  // console.log("prontuario1 = ",　prontuario1)
  // console.log("type of id = ", typeof(id) )

  if(prontuario1 !== id) {
    return (
      <DivComponent>
         <div className="page-container">
           <div className="top-Container">
             <NavBar />
            </div>
            <div className="content-container">
              <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="data_abertura">Data de abertura</label>
              <input className="input-form" type='date' placeholder='Data de Abertura' {...register('data_abertura', { required: 'Digite a data de abertura do prontuário' })} />
              {errors.data_abertura && <p>{errors.data_abertura.message}</p>}
              <input className='btn-form' type="submit" value="abrir prontuario"/>
              </form>
          </div>
        </div>
      </DivComponent>
    )
  } else {

  return (
    <DivComponent>
      <div className="page-container">
        <div className="top-Container">
          <NavBar />
        </div>
        <div className="content-container">
          <div className="header-medical-container">
            <div className="header-medical-item">
              <p>Paciente: <span>{mockGetProntID.paciente_prontuario.nome}</span></p>
              <p>Data de Abertura: <span>{date}</span></p>
            </div>
          </div>
          <div className="search-container">
            <div className="search-field">
              <input type="text" placeholder="Digite aqui..." />
              <span className="">
                <select>
                  <option>Por Paciente</option>
                  <option>Por Data</option>
                </select>
              </span>
            </div>
          </div>
          <div className="results-container">
            {cardProntuario}
            <div className="new-descricao">
              <p className="header-new-descricao">Nova descrição</p>
              <form action="">
                <textarea className="input-descricao-field" placeholder="Digite a nova descrição..." ></textarea>
                <div className="div-button"><input className="button-salvar" id="finalizar-consulta" type="submit" value="FINALIZAR CONSULTA" /> </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bot-container">
          <Menu />
        </div>

      </div>
    </DivComponent>
  );
  }
}

export default Prontuario;