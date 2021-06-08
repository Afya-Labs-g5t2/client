import React from 'react';
import { DivComponent } from './styles'
import mockData from '../../mockData'

interface ModalAgendamentoProps {
  showModal: boolean;
  setShowModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

function ModalAgendamento(props: ModalAgendamentoProps) {

  
  const mockEspecialista = mockData.especialistas.sort((a, b) => a.name > b.name ? 1 : -1).map(el => <option>{el.name}</option>)
  const mockPaciente = mockData.pacientes.sort((a, b) => a.name > b.name ? 1 : -1).map(el => <option>{el.name}</option>)
  const mockEmail = mockData.pacientes.map(el => <option>{el.email}</option>)
  const mockEspecialidade = mockData.especialidades.map(el => <option>{el.nome}</option>)

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
                <span className="material-icons" onClick={() => props.setShowModal(prev => !prev)}>close</span>
              </button>
            </div>
            <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control basicAutoComplete" id="exampleFormControlInput1" placeholder="name@example.com" data-url={mockEmail}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Filtrar por especialidade</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value="" selected disabled>Selecione a especialidade</option>
                  {mockEspecialidade}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Especialista</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value="" selected disabled>Selecione o especialista</option>
                  {mockEspecialista}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Paciente</label>
                <select className="form-control" id="exampleFormControlSelect2">
                  <option value="" selected disabled>Selecione o paciente</option>
                  {mockPaciente}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Comentarios</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
              </div>
            </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => props.setShowModal(prev => !prev)}>Cancelar</button>
              <button type="submit" className="btn btn-primary">Agendar</button>
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