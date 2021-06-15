import React, { useEffect, useState } from 'react';
import Menu from '../../../components/Menu'
import { DivComponent } from './styles'
import NavBar from '../../../components/NavBar';
import { useForm } from "react-hook-form";
import { api} from '../../../services/api'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useParams } from 'react-router-dom';

interface agendamentoProps {
  especialidade: string,
  especialista: string,
  paciente: string,
  date: string,
  initTime: string,
  endTime: string,
}

const AlterarAgendamento: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [apiData, setApiData] = useState<agendamentoProps>({} as agendamentoProps)

  let { id } = useParams<any>()

  const defaultValues = {
    "especialidade": `${apiData.especialidade}`,
    "especialista": `${apiData.especialista}`,
    "paciente": `${apiData.paciente}`,
    "date": `${apiData.date}`,
    "initTime": `${apiData.initTime}`,
    "endTime": `${apiData.endTime}`,
  };

  const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues });
  const onSubmit = (data: any) => {
    setIsLoading(true)
    api.put(`/agendamento/${id}`, data)
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
      ).finally(() => setIsLoading(false))
  };

  useEffect(() => {
    api.get(`/agendamento/${id}`)
      .then(res => {
        setApiData(res.data)
      })
      .catch(console.error)
  }, [])


  return (
    <DivComponent>
      <div className="page-container">
        <div className="top-Container">
          <NavBar />
        </div>
          <div className="modal-header">
              <h4 className="modal-title">Alterar agendamento</h4>
            </div>
            <div className="modal-body">
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <div className="info-wrapper">
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Filtrar por especialidade</label>
                    <select
                      className={`form-control`} 
                      id="exampleFormControlSelect1"
                      {...register('especialidade')}
                    >
                      <option value=""  disabled>Selecione a especialidade</option>
                      {'mockEspecialidade'}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Especialista</label>
                    <select
                      className={`form-control ${errors.especialista ? errors.especialista.message : ''}`}
                      id="exampleFormControlSelect1"
                      {...register('especialista', {required: 'error'})}
                    >
                      <option value="" selected disabled>Selecione o especialista</option>
                      {'mockEspecialista'}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect2">Paciente</label>
                    <select
                      className={`form-control ${errors.paciente ? errors.paciente.message : ''}`}
                      id="exampleFormControlSelect2"
                      {...register('paciente', {required: 'error'})}
                    >
                      <option value="" selected disabled>Selecione o paciente</option>
                      {'mockPaciente'}
                    </select>
                  </div>
              </div>
              <div className="form-inline">
                <div className="form-group">
                  <input
                    className={`default-date-picker ${errors.date ? errors.date.message : ''}`}
                    type="date"
                    {...register('date', {
                      required: 'error'
                    })}
                    />
                </div>
                <div className="time-pick-wrapper">
                  <div className="form-group">
                      <input
                        className={`form-control input-time ${errors.initTime ? errors.initTime.message : ''}`}
                        autoComplete="nope"
                        maxLength={5}
                        {...register('initTime', {required: 'error'})}
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
                <button type="submit" className="btn btn-primary">Alterar</button>
              </div>
            </form>
          </div>
        <div className="bot-container">
          <Menu />
        </div>
      </div>
      
    </DivComponent>
  );
}

export default AlterarAgendamento;