<p align="start">
  <img alt="GitHub client side" src="https://img.shields.io/badge/g5t2-client-red">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Afya-Labs-g5t2/client">
  
  <img src="https://img.shields.io/github/deployments/Afya-Labs-g5t2/client/production" alt="production status">
  
  <a href="https://i52-afyalabs.herokuapp.com/">
    <img alt="Landing page" src="https://img.shields.io/badge/Landing_page-white">
  </a>
</p>

<div style="text-align:center"><img src="https://user-images.githubusercontent.com/43910483/122756943-6dc7a200-d26d-11eb-9101-ed0cc773c563.png" /></div>

# Desafio Afya labs

Esse projeto faz parte do treinamento do [Gama Academy](https://www.gama.academy/) e [Afya](https://afya.com.br/).

O objetivo é criar um sistema para um consultório controlar o cadastro de seus clientes, atendimentos e prontuário dos pacientes.

Nosso time decidiu dividir o projeto em duas partes, um **client-side** e um **server-side**. Esse repositório é a parte Client do projeto. O **server-side** pode ser encontrado [aqui](https://github.com/Afya-Labs-g5t2/server).

### Preview

![afya](https://user-images.githubusercontent.com/43910483/121086311-61e1d780-c7b9-11eb-9cfe-f80c94232033.gif)

---

## Menu

* 🛠 [Pré-requisitos](#-pré-requisitos)
* 📚 [Bibliotecas](#-bibliotecas)
* 🚀 [Install](#-install)
* 📂 [Estruturação dos arquivos](#-estruturação-dos-arquivos)
* 🖥️ [Trabalhando no projeto](#%EF%B8%8F-trabalhando-no-projeto)
* 🤓 [Boas práticas](#-boas-práticas)

### 🛠 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 

Aconselhamos a utilizar o editor [VSCode](https://code.visualstudio.com/)

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

#### **Utilitários**

-   Protótipo:  **[Figma](https://www.figma.com/)**  → Fluxograma e Design
-   API Endereços:  **[ViaCEP](https://viacep.com.br/)**
-   API Banco de dados:  **[Prontuário API](https://g5t2-api.herokuapp.com/)**

### 🚀 Install

- Para iniciar a instalação, clone o repositório em sua pasta local ou faça o download 
```bash
git clone https://github.com/Afya-Labs-g5t2/client.git
cd client
```
- Instale as dependências do projeto

  ```bash
  # Utilizando npm
  $ npm install
  # Ou yarn
  $ yarn add
  ```
- Execute o aplicativo localmente
  ```bash
  # Utilizando npm
  $ npm start
  # Ou utilizando yarn
  yarn start
  ```
  depois desse comando a aplicação irá abrir na porta 3000: http://localhost:3000/
  
### 📂 Estruturação dos arquivos
O repositório tem estas pastas:
```
client-main
.
├── .yarn
├── build
├── public
├── src
│   ├── assets
│   │   ├── animation
│   │   ├── GlobalStyles
│   │   └── Logo.tsx
│   │
│   ├── components
│   │   ├── Calendar
│   │   ├── CardPaciente
│   │   ├── CardProntuario
│   │   ├── FormSignIn
│   │   ├── Loading
│   │   ├── Menu
│   │   ├── ModalAgendamento
│   │   └── Navbar
│   │
│   ├── services
│   │   └── api.ts
│   │       
│   ├── views
│   │   └── pages
|   |       ├──Agenda
│   │       ├──AlterarAgendamento
│   │       ├──AlterarEspecialista
│   │       ├──AlterarPaciente
│   │       ├──AlterarSenha
│   │       ├──EspecialistaInfo
│   │       ├──Especialistas
│   │       ├──Home
│   │       ├──Login
│   │       ├──NovoEspecialista
│   │       ├──NovoPaciente
│   │       ├──PacienteInfo
│   │       ├──Pacientes
│   │       ├──Prontuario
│   │       └── User
│   │
│   ├── App.tsx
│   ├── index.tsx
│   ├── private.routes.tsx
│   ├── react-app-env.d.ts
│   └── routes.tsx
│   
├── .gitignore
├── .yarnrc
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
|── vercel.json
└── yarn.lock

```
### 🖥️ Trabalhando no projeto

1. Crie uma nova branch para fazer suas alterações: `git checkout -b minha-branch`
2. O nome da nova branch deve informar a funcionalidade e a ação:
 ```
 # Exemplo
 Feature/fix-home-page
 Feature/create-button-medical-records
 ```
3. Salve as alterações e crie sua mensagem de commit: `git commit -m "Novo componente criado"`
4. Envie as alterações para o GitHub: `git push origin minha-branch`

- Sempre que realizar um push do código, é preciso realizar um Pull Request comparando a sua Branch com a Branch Dev, pedir um colega de equipe fazer a Review do Pull Request e por fim realizar o Merge na Branch dev.
 
- As páginas devem seguir a seguinte estrutura:

![image](https://user-images.githubusercontent.com/8262141/122313846-585d1b80-ceed-11eb-83c3-9c95f0c4d5b0.png)

### 🤓 Boas práticas

- As pastas do projeto deve ter o nome no formato CamelCase, os arquivos devem ter os nomes em minúsculo e possuir um arquivo index.tsx e um styles.ts. Exemplo: 
```
── ExemploPasta
    ├── index.tsx
    └── styles.ts
```

- As variáveis em JavaScript devem ser camel case:
```javascript
let myName = 'John'
const myOtherName = 'Doe'
```

- As classes devem ter o nome todo em lowercase separado por uma dash ( - )
```html
<!-- Exemplo -->
<div class='nome-dessa-classe'></div>
```


### 👩‍💻👨‍💻 Equipe

Nossa equipe de desenvolvedores que construiu a aplicação.

<table>
  <tr>
    <td align="center"><a href="https://github.com/mlamarques"><img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4D03AQFvVEnCp_JluQ/profile-displayphoto-shrink_200_200/0/1542309353353?e=1629331200&v=beta&t=5L0m9gSLY6Ki1i2bcigKRxXdqcAj86uEMZOmKk2tZDE" width="100px;" alt=""/><br /><sub><b>Marcos Lamarques</b></sub></a><br/>
     <a href="https://www.linkedin.com/in/mlamarques/"><img src="https://img.shields.io/badge/-Marcos-blue?style=flat-square&logo=Linkedin&logoColor=white"></a>
    </td>
    <td align="center"><a href="https://github.com/micheleset7"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/60739164?v=4" width="100px;" alt=""/><br /><sub><b>Michele Coelho</b></sub></a><br/>
    <a href="https://www.linkedin.com/in/michele-coelho-5017aa79/"><img src="https://img.shields.io/badge/-Michele-blue?style=flat-square&logo=Linkedin&logoColor=white"></a></td>
    <td align="center"><a href="https://github.com/vinicius-carvalho"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/8262141?v=4" width="100px;" alt=""/><br /><sub><b>Vinicius Carvalho</b></sub></a><br />
    <a href="https://www.linkedin.com/in/viniciuscostacarvalho/"><img src="https://img.shields.io/badge/-Vinicius-blue?style=flat-square&logo=Linkedin&logoColor=white"></a>
    </td>
    <td align="center"><a href="https://github.com/RenataMie"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/73265234?v=4" width="100px;" alt=""/><br /><sub><b>Renata Mie</b></sub></a><br />
    <a href="https://www.linkedin.com/in/renatakanezaki/"><img src="https://img.shields.io/badge/-Renata-blue?style=flat-square&logo=Linkedin&logoColor=white"></a>
    </td>
    <td align="center"><a href="https://github.com/renatolobojr"><img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4E03AQGo0qmjjwu9XA/profile-displayphoto-shrink_200_200/0/1587556028562?e=1629331200&v=beta&t=O7lp30Z5I8O8s49cXIOX5x6brGxnKzZeGmBIv_TmdRM" width="100px;" alt=""/><br /><sub><b>Renato Lobo</b></sub></a><br />
    <a href="https://www.linkedin.com/in/renatolobo-engenheiro/"><img src="https://img.shields.io/badge/-Renato-blue?style=flat-square&logo=Linkedin&logoColor=white"></a>
    </td>
    <td align="center"><a href="https://github.com/Thais-Hoshii"><img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4D03AQFxBPEY563hCQ/profile-displayphoto-shrink_200_200/0/1600110281835?e=1629331200&v=beta&t=5sKUElvEMdcVaeowULMiDo7ikWVeM0Ls64dq9clFTwU" width="100px;" alt=""/><br /><sub><b>Thaís Hoshii</b></sub></a><br />
    <a href="https://www.linkedin.com/in/thais-hoshii/"><img src="https://img.shields.io/badge/-Thais-blue?style=flat-square&logo=Linkedin&logoColor=white"></a></td>
    <tr>
 </table>

Nosso email de contato: [![Gmail Badge](https://img.shields.io/badge/-g5t2.desafioafyalabs@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:g5t2.desafioafyalabs@gmail.com)](mailto:g5t2.desafioafyalabs@gmail.com)
