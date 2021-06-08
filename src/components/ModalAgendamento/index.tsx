import React from 'react';
import { DivComponent } from './styles'
import mockData from '../../mockData'

interface ModalAgendamentoProps {
  showModal: boolean;
  setShowModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

function ModalAgendamento(props: ModalAgendamentoProps) {

  
  const mockEspecialista = mockData.especialistas.map(el => <option>{el.name}</option>)
  const mockPaciente = mockData.pacientes.map(el => <option>{el.name}</option>)

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
              <h5 className="modal-title">Novo agendamento</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span className="material-icons" onClick={() => props.setShowModal(prev => !prev)}>close</span>
              </button>
            </div>
            <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control basicAutoComplete" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Especialista</label>
                <select className="form-control" id="exampleFormControlSelect1" value="">
                  {mockEspecialista}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Paciente</label>
                <select className="form-control" id="exampleFormControlSelect2" value="">
                  {mockPaciente}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
              </div>
            </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Save changes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => props.setShowModal(prev => !prev)}>Close</button>
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