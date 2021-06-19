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

interface ProfissaoProps {
  profissao: string
}

interface IUserRegister{
  registro: string
  nome: string,
  telefone: string,
  celular: string,
  email: string,
  tipo_sangue: string,
  endereco: AddressProps,
  profissao: ProfissaoProps
}

const EspecialistaInfo: React.FC = () => {
  const [apiData, setApiData] = useState<IUserRegister>({} as IUserRegister)
  let { id } = useParams<any>()

  useEffect(() => {
    api.get(`especialistas/${id}`)
      .then(res => {
        setApiData(res.data)
      })
      .catch(console.error)
  }, [])

  return (
      <DivComponent>
      <div className="page-container">
        <div className="top-container">
        <NavBar />
        </div>
        <div className="content-container">
          <div className="especialista-container">
            <div className="especialista-cover">
              <div className="especialista-main">
                <div className="photo-container"></div>
                <div className="name-container">
                  <span className="name">{apiData.nome}</span>
                </div>
              </div>
              <div className="quick-info" >
                  <span className="profissao-text">{apiData.profissao?.profissao}</span>
              </div>
            </div>
            <div className="info-container">
              <div className="dados-especialista-container">
                <div className="title-wrapper">
                  <div className="dados-title">
                    <span className="title-value">Dados</span>
                  </div>
                  <div className="dados-edit">
                    <Link to={`${id}/edit`}>
                    <span className="edit-dados-value material-icons">mode_edit</span>
                    </Link>
                  </div>
                </div>
                <div className="dados-container">
                  <div className="especialista-nome-completo">
                    <span className="nome-completo-label">nome completo</span>
                    <span className="nome-completo-value">{apiData.nome}</span>
                  </div>
                  <div className="especialista-email">
                    <span className="email-label">e-mail</span>
                    <span className="email-value">{apiData.email}</span>
                  </div>
                  <div className="especialista-cpf">
                    <span className="cpf-label">Registro</span>
                    <span className="cpf-value">{apiData.registro}</span>
                  </div>
                  <div className="especialista-celular">
                    <span className="celular-label">celular</span>
                    <span className="celular-value">{apiData.celular}</span>
                  </div>
                  <div className="especialista-tel">
                    <span className="tel-label">telefone</span>
                    <span className="tel-value">{apiData.telefone}</span>
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
                      <span className="logradouro-value">{apiData.endereco?.logradouro}</span>
                    </div>
                    <div className="numero-field">
                      <span className="numero-label">Numero</span>
                      <span className="numero-value">{apiData.endereco?.numero}</span>
                    </div>
                  </div>
                  <div className="bairro-field">
                      <span className="bairro-label">Bairro</span>
                      <span className="bairro-value">{apiData.endereco?.bairro}</span>
                  </div>
                  <div className="cidade-wrapper">
                    <div className="cidade-field">
                        <span className="cidade-label">Cidade</span>
                        <span className="cidade-value">{apiData.endereco?.cidade}</span>
                    </div>
                    <div className="estado-field">
                        <span className="estado-label">UF</span>
                        <span className="estado-value">{apiData.endereco?.uf}</span>
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

export default EspecialistaInfo;