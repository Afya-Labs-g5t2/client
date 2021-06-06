import React, { useState } from 'react';
import Menu from '../../../components/Menu'
import {DivComponent} from './styles'
import NavBar from '../../../components/NavBar';

import mockPacientes from '../../../mockPacientes';
import { useParams  } from 'react-router';

// import { Container } from './styles';


const PacienteInfo: React.FC = () => {
  let { id } = useParams<any>()
  const selectedCliente = mockPacientes.pacientes.filter(paciente => paciente.id.toString() === id)[0]

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
                  <span className="name">{selectedCliente.name}</span>
                </div>
              </div>
              <div className="quick-info" >
                <a href="#" className="acessar-prontuario">
                  <span className="prontuario-text">Prontuario</span>
                </a>
                <div className="quick-sangue">
                  <span className="sangue-label">Tipo sanguíneo</span>
                  <div className="sangue-value">
                    <span className="sangue-letters">{selectedCliente.tipo_sangue.toString().slice(0,-1)}</span>
                    <span className="sangue-sinal">{selectedCliente.tipo_sangue.toString().slice(-1,)}</span>
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
                    <span className="nome-completo-value">{selectedCliente.name}</span>
                  </div>
                  <div className="paciente-email">
                    <span className="email-label">e-mail</span>
                    <span className="email-value">{selectedCliente.email}</span>
                  </div>
                  <div className="paciente-cpf">
                    <span className="cpf-label">CPF</span>
                    <span className="cpf-value">{selectedCliente.cpf}</span>
                  </div>
                  <div className="paciente-celular">
                    <span className="celular-label">celular</span>
                    <span className="celular-value">{selectedCliente.celular}</span>
                  </div>
                  <div className="paciente-tel">
                    <span className="tel-label">telefone</span>
                    <span className="tel-value">{selectedCliente.telefone}</span>
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
                      <span className="logradouro-value">Av Nacoes Unidas da piraciabinha de jesus</span>
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