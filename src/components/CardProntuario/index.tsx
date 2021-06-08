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
          <div className="especialista-container">
              <p className="especialista-header">Especialista: <span className="especialista-value"> {props.nomeEspecialista}</span></p>
            </div>
            <div className="data-container">
            <p className="data-header">Data: <span className="data-value">{props.dataProntuario}</span></p>
              <p className="data-header">Hora: <span className="data-value">00:00</span></p>
            </div>
            <div className="descricao-container">
              <span className="descricao-value">Descrição:</span> 
              <p>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Mauris laoreet ex urna, a accumsan ligula iaculis sagittis. 
              Cras sollicitudin dui sed leo eleifend, pellentesque tempor nisi pharetra. In risus nisl, 
              rhoncus quis quam eu, egestas hendrerit nulla.
              Sed facilisis blandit vulputate. Nullam lacinia, ante nec interdum pellentesque
              consectetur adipiscing elit. Mauris laoreet ex urna, a accumsan ligula iaculis sagittis. 
              Cras sollicitudin dui sed leo eleifend, pellentesque tempor nisi pharetra. In risus nisl, 
              rhoncus quis quam eu, egestas hendrerit nulla.
              Sed facilisis blandit vulputate. Nullam lacinia, ante nec interdum pellentesque
              </p>
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