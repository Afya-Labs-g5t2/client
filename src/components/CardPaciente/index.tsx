import { DivComponent } from './styles'

interface PacienteProps {
  id: number;
  name: string;
  telefone: string;
  email: string;
  handleClick: (id: number) => void;
}

function CardPaciente(props: PacienteProps) {
  return(
    <DivComponent>
      <div className="card-paciente-container" onClick={() => props.handleClick(props.id)}>
        <div className="info-container">
          <div className="name-container">
              <span className="name-value">{props.name}</span>
            </div>
            <div className="email-container">
              <span className="email-value">{props.email}</span>
            </div>
            <div className="telefone-container">
              <span className="telefone-value">tel: {props.telefone}</span>
            </div>
        </div>
        <div className="icon-container">
          <span className="material-icons">navigate_next</span>
        </div>
      </div>
    </DivComponent>
  )
}

export default CardPaciente;