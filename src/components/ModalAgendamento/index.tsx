import React, { useState } from 'react';
import { DivComponent } from './styles'
import { useForm } from "react-hook-form";
import { compareAsc, format } from 'date-fns'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import mockData from '../../mockData'


interface ModalAgendamentoProps {
  showModal: boolean;
  setShowModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  closeButton: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

function ModalAgendamento(props: ModalAgendamentoProps) {
  const [isLoading, setIsLoading] = useState(false)

  
  const mockEspecialista = mockData.especialistas.sort((a, b) => a.name > b.name ? 1 : -1).map(el => <option key={el.id}>{el.name}</option>)
  const mockPaciente = mockData.pacientes.sort((a, b) => a.name > b.name ? 1 : -1).map(el => <option key={el.id}>{el.name}</option>)
  const mockEmail = mockData.pacientes.map(el => <option>{el.email}</option>)
  const mockEspecialidade = mockData.especialidades.sort((a, b) => a.nome > b.nome ? 1 : -1).map(el => <option key={el.id}>{el.nome}</option>)

  const defaultValues = {
    "especialidade": "",
    "especialista": "",
    "paciente": "",
    "date": format(new Date(), 'yyyy-MM-dd'),
    "initTime": "",
    "endTime": "",
  };

  const { register, setValue, handleSubmit, reset, formState: { errors  } } = useForm({ defaultValues });

  const onSubmit = (data: any) => {
    console.log('form sent')
    reset({ ...defaultValues })
    console.log(data)
    handleCancel()
  };

  function handleCancel() {
    props.setShowModal(prev => !prev)
    props.closeButton(prev => !prev)
  }

  return(
    <>
    {props.showModal ?
    <DivComponent>
      {/* <div className="modal modal-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12" onClick={() => props.setShowModal(prev => !prev)}>
              <h3>Ola! minha primeira pagina</h3>
            </div>
          </div>
        </div>
      </div> */}
      <div className="modal" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Novo agendamento</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span className="material-icons" onClick={handleCancel}>close</span>
              </button>
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
                      <option value="" selected disabled>Selecione a especialidade</option>
                      {mockEspecialidade}
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
                      {mockEspecialista}
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
                      {mockPaciente}
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
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Comentarios</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleCancel}>Cancelar</button>
                <button type="submit" className="btn btn-primary">Agendar</button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </DivComponent>
    :
    null}
    </>
  )
}

export default ModalAgendamento;