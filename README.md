# Desafio Afya labs

Esse projeto faz parte do treinamento do [Gama Academy](https://www.gama.academy/) e [Afya](https://afya.com.br/).

O objetivo é criar um sistema para um consultório controlar o cadastro de seus clientes, atendimentos e prontuário dos pacientes.

Nosso time decidiu dividir o projeto em duas partes, um **client-side** e um **server-side**. Esse repositório é a parte Client do projeto. O **client-side** pode ser encontrado [aqui](https://github.com/Afya-Labs-g5t2/server).

### Preview

![afya](https://user-images.githubusercontent.com/43910483/121086311-61e1d780-c7b9-11eb-9cfe-f80c94232033.gif)

---


## Menu

- [Install](#install)
- [Estruturação dos arquivos](#estruturação-dos-arquivos)
- [Trabalhando no projeto](#trabalhando-no-projeto)
- [Boas práticas](#boas-práticas)

## Projeto

O projeto foi feito utilizando React.js e Typescript. As principais bibliotecas utilizadas foram:

- [axios](https://github.com/axios/axios)
- [react-router-dom](https://reactrouter.com/)
- [styled-components](https://styled-components.com/)
- [react-hook-form](https://react-hook-form.com/)

### Install

- para iniciar a instalação, clone o repositório em sua pasta local ou faça o download 
```bash
git clone https://github.com/Afya-Labs-g5t2/client.git
cd client
```
- instale as dependências do projeto

  - npm
  ```bash
  npm install
  ```
  - yarn
  ```bash
  yarn add
  ```
- Execute o aplicativo localmente
  - npm
  ```bash
  npm start
  ```
  - yarn
  ```bash
  yarn start
  ```
  
### Estruturação dos arquivos
O repositório tem essas pastas:
```
client-main
.
├── .yarn
├── public
├── src
│   ├── assets
│   │   ├── animation
│   │   ├── GlobalStyles
│   │   │   └── faces
│   │   └── js
│   ├── components
│   │   ├── Calendar
│   │   ├── CardPaciente
│   │   ├── CardProntuario
│   │   ├── FormSignIn
│   │   ├── Menu
│   │   ├── ModalAgendamento
│   │   └── Navbar
│   ├── services
│   │   └── api.ts
│   │       ├──Agenda
│   │       ├──AlterarSenha
│   │       ├──Especialista
│   │       ├──Home
│   │       ├──Login
│   │       ├──NovoPaciente
│   │       ├──PacienteInfo
│   │       ├──Prontuario
│   │       ├──Prontuario
│   │       └── User
│   ├── views
│   │   └── pages
│   ├── App.tsx
│   ├── index.tsx
│   ├── private.routes.tsx
│   ├── react-app-env.d.ts
│   └── routes.tsx
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── yarn.lock

```
  
### Trabalhando no projeto

### Boas práticas


