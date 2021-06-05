import { DivComponent } from './styles'

interface ProntuarioProps {
  id: number;
  nomePaciente: string;
  nomeEspecialista: string;
  dataProntuario: string;  
  handleClick: (id: number) => void;
}

function CardProntuario(props: ProntuarioProps) {
  return(
    <DivComponent>
      <div className="card-prontuario-container" onClick={() => props.handleClick(props.id)}>
        <div className="info-container">
          <div className="paciente-container">
              <span className="paciente-value">{props.nomePaciente}</span>
            </div>
            <div className="especialista-container">
              <span className="especialista-value">{props.nomeEspecialista}</span>
            </div>
            <div className="data-container">
              <span className="data-value">Data: {props.dataProntuario}</span>
            </div>
        </div>
        <div className="icon-container">
          <span className="material-icons">navigate_next</span>
        </div>
      </div>
    </DivComponent>
  )
}

export default CardProntuario;