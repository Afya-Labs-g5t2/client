![image](https://user-images.githubusercontent.com/43910483/122138140-8161ab80-ce1c-11eb-8017-e23437faecb2.png)


# Desafio Afya labs

Esse projeto faz parte do treinamento do [Gama Academy](https://www.gama.academy/) e [Afya](https://afya.com.br/).

O objetivo é criar um sistema para um consultório controlar o cadastro de seus clientes, atendimentos e prontuário dos pacientes.

Nosso time decidiu dividir o projeto em duas partes, um **client-side** e um **server-side**. Esse repositório é a parte Client do projeto. O **client-side** pode ser encontrado [aqui](https://github.com/Afya-Labs-g5t2/server).

### Preview

![afya](https://user-images.githubusercontent.com/43910483/121086311-61e1d780-c7b9-11eb-9cfe-f80c94232033.gif)

---


## Menu

- 📚 [Bibliotecas](#bibliotecas)
- 🚀 [Install](#install)
- 📂 [Estruturação dos arquivos](#estruturação-dos-arquivos)
- 🖥️ [Trabalhando no projeto](#trabalhando-no-projeto)
- 🤓 [Boas práticas](#boas-práticas)

### 📚 Bibliotecas

O projeto foi feito utilizando React.js e Typescript. As principais bibliotecas utilizadas foram:

- [axios](https://github.com/axios/axios)
- [react-router-dom](https://reactrouter.com/)
- [react-dom](https://github.com/facebook/react/tree/master/packages/react-dom)
- [styled-components](https://styled-components.com/)
- [react-hook-form](https://react-hook-form.com/)
- [react-lottie](https://github.com/chenqingspring/react-lottie)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [react-day-picker](https://github.com/gpbl/react-day-picker)
- [react-icons](https://react-icons.github.io/react-icons/)
- [framer-motion](https://github.com/framer/motion)
- [material-design-icons-iconfont](https://google.github.io/material-design-icons/)
- [date-fns](https://github.com/date-fns/date-fns)
- [react-toastify](https://fkhadra.github.io/react-toastify/introduction/)

### 🚀 Install

- Para iniciar a instalação, clone o repositório em sua pasta local ou faça o download 
```bash
git clone https://github.com/Afya-Labs-g5t2/client.git
cd client
```
- Instale as dependências do projeto

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
  
### 📂 Estruturação dos arquivos
O repositório tem estas pastas:
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
### 🖥️ Trabalhando no projeto




### 🤓 Boas práticas

- Criação de um novo Componente deve seguir a seguinte estrutura na renderização: 
![image](https://user-images.githubusercontent.com/8262141/122313846-585d1b80-ceed-11eb-83c3-9c95f0c4d5b0.png)

- Para realizar correções ou criação de novas features, deve-se criar uma nova branch informando a funcionalidade e a ação. Ex:
 ```
 fix-home-page
 create-button-medical-records
 ```
- Sempre que for realizar um push do código, é preciso realizar um Pull Request comparando a sua Branch com a Branch Dev, pedir um review do Pull Request para um colega da equipe e realizar o Merge na branch dev.

- Toda segunda-feira é realizado o merge de produção. É realizado o merge da branch dev para a nain.

### 👩‍💻👨‍💻 Equipe

Nossa equipe de desenvolvedores que construiu a aplicação.

![image](https://user-images.githubusercontent.com/8262141/122312667-0fa46300-ceeb-11eb-85f8-1da7ef219efc.png)

Nosso email de contato:  g5t2.desafioafyalabs@gmail.com
