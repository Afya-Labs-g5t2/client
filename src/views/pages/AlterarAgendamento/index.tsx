import React, { useEffect, useState } from 'react';
import Menu from '../../../components/Menu'
import { DivComponent } from './styles'
import NavBar from '../../../components/NavBar';
import { useForm } from "react-hook-form";
import { api} from '../../../services/api'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link, useHistory, useParams } from 'react-router-dom';

interface EspecialistaProps {
  nome: string
}

interface PacienteProps {
  id: number,
  nome: string
}

interface agendamentoProps {
  id: number,
  data_atendimento: string,
  hora_atendimento: string,
  status: string,
  paciente: PacienteProps,
  especialista: EspecialistaProps,
}

interface Pacientes{
  id: number,
  nome: string
}

interface Especialistas{
  id: number,
  id_profissao:number,
  nome:string
}

const AlterarAgendamento: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [apiData, setApiData] = useState<agendamentoProps>({} as agendamentoProps)
  const [pacientesList, setPacientesList] = useState<[Pacientes] | []>([]);
  const [especialistaList, setEspecialistaList] = useState<[Especialistas] | []>([])
  let { id } = useParams<any>()
  let history = useHistory()

  const defaultValues = {
    "id": apiData.id,
    "especialista": apiData.especialista?.nome,
    "paciente": apiData.paciente?.nome,
    "data_atendimento": apiData?.data_atendimento,
    "hora_atendimento": apiData?.hora_atendimento,
    "endTime": "",
    "status": ""
  };

  const especialistaListSorted = especialistaList
                                  .sort((a, b) => a.nome > b.nome ? 1 : -1)
                                  .map((el: Especialistas) => el.nome === apiData.especialista?.nome ? 
                                  <option selected={true} key={el.id}>{el.nome}</option>
                                  :
                                  <option key={el.id}>{el.nome}</option>
                                  )
  const pacienteListSorted = pacientesList
                              .sort((a, b) => a.nome > b.nome ? 1 : -1)
                              .map((el: Pacientes) => el.nome === apiData.paciente?.nome ?
                              <option selected={true} key={el.id}>{el.nome}</option>
                              :
                              <option key={el.id}>{el.nome}</option>
                              )

  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({ defaultValues });
  const onSubmit = (data: any) => {
    setIsLoading(true)
    api.put(`/atendimentos/${id}`, data)
      .then(
        response => {
          toast.success('Agendamento alterado!', {
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
        toast.error("Oops! Não foi possível fazer a alteracao", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        })
      }
      ).finally(() => {
        setIsLoading(false)
        history.goBack()
      })
  };

  useEffect(() => {
    api.get("pacientes").then(res => {
      setPacientesList(res.data)
    }).catch(console.error)

    api.get("especialistas").then(res => {
      setEspecialistaList(res.data)
    }).catch(console.error)

    api.get(`/atendimentos/${id}`)
      .then(res => {
        const agendamentoData = res.data
        setApiData(res.data)
        fillFormData(agendamentoData)
      })
      .catch(console.error)

    
  }, [])

  function fillFormData(data: agendamentoProps) {
    setValue('data_atendimento',data.data_atendimento)
    setValue('hora_atendimento',data.hora_atendimento)
    setValue('status',data.status)
  }

  return (
    <DivComponent>
      <div className="page-container">
        <div className="top-container">
          <NavBar title={'Alterar'}/>
        </div>
        <div className="content-container">
          <div className="modal-header">
              <h4 className="modal-title">Alterar agendamento</h4>
            </div>
            <div className="modal-body">
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <div className="info-wrapper">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Especialista</label>
                    <select
                      className={`form-control ${errors.especialista ? errors.especialista.message : ''}`}
                      id="exampleFormControlSelect1"
                      {...register('especialista', {required: 'error'})}
                    >
                      <option value={apiData.especialista?.nome}  disabled>Selecione o especialista</option>
                      {especialistaListSorted}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect2">Paciente</label>
                    <select
                      className={`form-control ${errors.paciente ? errors.paciente.message : ''}`}
                      id="exampleFormControlSelect2"
                      {...register('paciente', {required: 'error'})}
                    >
                      <option value={apiData.paciente?.nome}  disabled>Selecione o paciente</option>
                      {pacienteListSorted}
                    </select>
                  </div>
              </div>
              <div className="form-inline">
                <div className="form-group">
                  <input
                    className={`default-date-picker ${errors.data_atendimento ? errors.data_atendimento.message : ''}`}
                    type="date"
                    {...register('data_atendimento', {
                      required: 'error'
                    })}
                    />
                </div>
                <div className="time-pick-wrapper">
                  <div className="form-group">
                      <input
                        className={`form-control input-time ${errors.hora_atendimento ? errors.hora_atendimento.message : ''}`}
                        autoComplete="nope"
                        maxLength={5}
                        {...register('hora_atendimento', {required: 'error'})}
                      />
                    </div>
                    <span className="time-separator">às</span>
                    <div className="form-group">
                      <input
                      className={`form-control input-time ${errors.endTime ? errors.endTime.message : ''}`}
                      autoComplete="nope" 
                      maxLength={5}
                      {...register('endTime', {required: 'error'})}
                    /> 
                    </div>
                  </div>
                </div>
              <div className="modal-footer">
                <div className="form-group">
                  <select
                    className={`form-control ${errors.status ? errors.status.message : ''}`}
                    id="exampleFormControlSelect2"
                    {...register('status', {required: 'error'})}
                  >
                    <option value=""  disabled>Selecione o status</option>
                    {<option>AGENDADO</option>}
                    {<option>CANCELADO</option>}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Alterar</button>
              </div>
            </form>
            <div className="consulta-start-container">
              <div className="consulta-start-wrapper">
                <Link to={`/prontuarios/${apiData.paciente?.id}`}>
                <span className="consulta-start-value">Iniciar consulta</span>
                </Link>
              </div>
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

export default AlterarAgendamento;