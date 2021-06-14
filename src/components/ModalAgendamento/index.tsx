import React, { InputHTMLAttributes, useCallback, useRef, useState, useEffect } from 'react';
import { DivComponent } from './styles'
import { useForm } from "react-hook-form";
import { compareAsc, format } from 'date-fns'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import mockData from '../../mockData'
import { motion } from 'framer-motion';
import {api} from "../../services/api"
import { func } from 'prop-types';
import { number } from 'yargs';


interface ModalAgendamentoProps {
  showModal: boolean;
  setShowModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  closeButton: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

interface Pacientes{
  "id":number,
  "nome":string
}

interface Especialistas{
  "id":number,
  "id_profissao":number,
  "nome":string
}

interface ProfissoesProps{
  "id":number,
  "profissao":string
}

function ModalAgendamento(props: ModalAgendamentoProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [pacientesList, setPacientesList] = useState<[Pacientes]>([{id:0, nome:""}]);
  const [especialistaList, setEspecialistaList] = useState<[Especialistas]>([{id:0, id_profissao:0, nome:""}])
  const [profissoesList, setProfissoesList] = useState<[ProfissoesProps]>([{id:0, profissao:""}])
  const [profissaoSelected, setProfissaoSelected] = useState<string>("")

  useEffect(() => {
    api.get("pacientes").then(res => {
        setPacientesList(res.data)
      }).catch(console.error)

      api.get("especialistas").then(res => {
        setEspecialistaList(res.data)
      }).catch(console.error)

      api.get("profissoes").then(res => {
        setProfissoesList(res.data)
      }).catch(console.error)

      console.log(pacientesList)
      console.log(especialistaList)
      console.log(profissoesList)

  }, [])
  
  const especialistaListSorted = especialistaList.sort((a, b) => a.nome > b.nome ? 1 : -1).map(el => profissoesList.find(x => x.id === el.id_profissao)?.profissao === profissaoSelected && <option key={el.id}>{el.nome}</option>)
  const pacienteListSorted = pacientesList.sort((a, b) => a.nome > b.nome ? 1 : -1).map(el => <option key={el.id}>{el.nome}</option>)
  const profissaoListSorted = profissoesList.sort((a, b) => a.profissao > b.profissao ? 1 : -1).map(el => <option key={el.id}>{el.profissao}</option>)
  const modalRef = useRef()

  const fadeTop = {
    hidden: { opacity: 0, y: -100},
    visible: { opacity: 1, y: 0}
  }
  
  const defaultValues = {
    "especialidade": "",
    "especialista": "",
    "paciente": "",
    "date": format(new Date(), 'yyyy-MM-dd'),
    "initTime": "",
    "endTime": "",
  };

  const { register, getValues, handleSubmit, reset, formState: { errors  } } = useForm({ defaultValues });
  
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
  
  function handleChange(){
    setProfissaoSelected(getValues('especialidade'))
    console.log(profissaoSelected);
  }


const handleKeyupTimeMask = useCallback(( e: React.FormEvent<HTMLInputElement>) =>{
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "")
  value = value.replace(/^(\d{2})(\d)/ , "$1:$2")
  e.currentTarget.value = value;
}, []) 
  
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
          <motion.div  variants={fadeTop} initial='hidden' animate='visible' exit='hidden' transition={{ duration: .4 }} className="modal-content">
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
                      onBlur={handleChange}
                    >
                      <option value={profissaoSelected} selected disabled>Selecione a especialidade</option>
                      {profissaoListSorted}
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
                      <option value="" selected disabled>Selecione o paciente</option>
                      {pacienteListSorted}
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
                        onKeyUp={handleKeyupTimeMask} className={`form-control input-time ${errors.initTime ? errors.initTime.message : ''}`}
                        autoComplete="nope"
                        maxLength={5}
                        {...register('initTime', {required: 'error'})}
                      />
                    </div>

                    <span className="time-separator">às</span>
                    <div className="form-group">
                      <input
                      onKeyUp={handleKeyupTimeMask} className={`form-control input-time ${errors.endTime ? errors.endTime.message : ''}`}
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
          </motion.div>
        </div>
      </div>
    </DivComponent>
    :
    null}
    </>
  )
}

export default ModalAgendamento;