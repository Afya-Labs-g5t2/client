import React, { useEffect, useState } from 'react';
import Menu from '../../../components/Menu'
import {DivComponent} from './styles'
import NavBar from '../../../components/NavBar';
import { useParams  } from 'react-router';
import { api } from '../../../services/api';
import { Link } from 'react-router-dom';

interface AddressProps {
  cep: number,
  logradouro: string,
  numero: number,
  bairro: string,
  cidade: string,
  uf: string,
}

interface IUserRegister{
  cpf: string
  nome: string,
  tel: string,
  celular: string,
  data_nasc: string,
  email: string,
  tipo_sangue: string,
  endereco_paciente: AddressProps,
}

const PacienteInfo: React.FC = () => {
  const [apiData, setApiData] = useState<IUserRegister>({} as IUserRegister)
  let { id } = useParams<any>()

  useEffect(() => {
    api.get(`pacientes/${id}`)
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
        <div className="content-container">
          <div className="paciente-container">
            <div className="paciente-cover">
              <div className="paciente-main">
                <div className="photo-container"></div>
                <div className="name-container">
                  <span className="name">{apiData.nome}</span>
                </div>
              </div>
              <div className="quick-info" >
                <Link to="/prontuario" className="acessar-prontuario">
                  <span className="prontuario-text">Prontuario</span>
                </Link>
                <div className="quick-sangue">
                  <span className="sangue-label">Tipo sanguíneo</span>
                  <div className="sangue-value">
                    {/* <span className="sangue-letters">{apiData.tipo_sangue.toString().slice(0,-1)}</span>
                    <span className="sangue-sinal">{apiData.tipo_sangue.toString().slice(-1,)}</span> */}
                    <span className="sangue-letters">{apiData.tipo_sangue}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-container">
              <div className="dados-paciente-container">
                <div className="title-wrapper">
                  <div className="dados-title">
                    <span className="title-value">Dados</span>
                  </div>
                  <div className="dados-edit">
                    <span className="edit-dados-value material-icons">mode_edit</span>
                  </div>
                </div>
                <div className="dados-container">
                  <div className="paciente-nome-completo">
                    <span className="nome-completo-label">nome completo</span>
                    <span className="nome-completo-value">{apiData.nome}</span>
                  </div>
                  <div className="paciente-email">
                    <span className="email-label">e-mail</span>
                    <span className="email-value">{apiData.email}</span>
                  </div>
                  <div className="paciente-cpf">
                    <span className="cpf-label">CPF</span>
                    <span className="cpf-value">{apiData.cpf}</span>
                  </div>
                  <div className="paciente-celular">
                    <span className="celular-label">celular</span>
                    <span className="celular-value">{apiData.celular}</span>
                  </div>
                  <div className="paciente-tel">
                    <span className="tel-label">telefone</span>
                    <span className="tel-value">{apiData.tel}</span>
                  </div>
                </div>
              </div>
              <div className="adress-container">
                <div className="title-wrapper">
                  <div className="adress-title">
                    <span className="title-value">Endereco</span>
                  </div>
                  <div className="dados-edit">
                    <span className="edit-adress-value material-icons">mode_edit</span>
                  </div>
                </div>
                <div className="adress-fields">
                  <div className="cep-field">
                    <span className="cep-label">CEP</span>
                    <span className="cep-value">0479500</span>
                  </div>
                  <div className="rua-wrapper">
                    <div className="logradouro-field">
                      <span className="logradouro-label">Rua</span>
                      <span className="logradouro-value">{apiData.endereco_paciente?.logradouro}</span>
                    </div>
                    <div className="numero-field">
                      <span className="numero-label">Numero</span>
                      <span className="numero-value">800</span>
                    </div>
                  </div>
                  <div className="bairro-field">
                      <span className="bairro-label">Bairro</span>
                      <span className="bairro-value">Vila Palmeiras</span>
                  </div>
                  <div className="cidade-wrapper">
                    <div className="cidade-field">
                        <span className="cidade-label">Cidade</span>
                        <span className="cidade-value">Sao Paulo</span>
                    </div>
                    <div className="estado-field">
                        <span className="estado-label">UF</span>
                        <span className="estado-value">SP</span>
                    </div>
                  </div>
                </div>
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

export default PacienteInfo;