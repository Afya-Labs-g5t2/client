![image](https://user-images.githubusercontent.com/43910483/122138140-8161ab80-ce1c-11eb-8017-e23437faecb2.png)


# Desafio Afya labs

Esse projeto faz parte do treinamento do [Gama Academy](https://www.gama.academy/) e [Afya](https://afya.com.br/).

O objetivo é criar um sistema para um consultório controlar o cadastro de seus clientes, atendimentos e prontuário dos pacientes.

Nosso time decidiu dividir o projeto em duas partes, um **client-side** e um **server-side**. Esse repositório é a parte Client do projeto. O **server-side** pode ser encontrado [aqui](https://github.com/Afya-Labs-g5t2/server).

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

- Sempre que realizar um push do código, é preciso realizar um Pull Request comparando a sua Branch com a Branch Dev, pedir um colega de equipe fazer a Review do Pull Request e por fim realizar o Merge na Branch dev.

- Toda Segunda-feira é realizado o merge de produção. É realizado o merge da Branch dev para a main.
- Para realizar correções ou criação de novas features, deve-se criar uma nova branch informando a funcionalidade e a ação. Ex:
 ```
 Feature/fix-home-page
 Feature/create-button-medical-records
 ```
### 🤓 Boas práticas

- Criação de um novo Componente deve seguir a seguinte estrutura na renderização:

![image](https://user-images.githubusercontent.com/8262141/122313846-585d1b80-ceed-11eb-83c3-9c95f0c4d5b0.png)

- As pastas do projeto deve ter o nome no formato CamelCase, os arquivos devem ter os nomes em minúsculo e possuir um arquivo index.tsx e um styles.ts. Exemplo: 

```
── ExemploPasta
    ├── index.tsx
    ├── styles.ts
```
### 👩‍💻👨‍💻 Equipe

Nossa equipe de desenvolvedores que construiu a aplicação.

<table>
  <tr>
    <td align="center"><a href="https://github.com/mlamarques"><img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4D03AQFvVEnCp_JluQ/profile-displayphoto-shrink_200_200/0/1542309353353?e=1629331200&v=beta&t=5L0m9gSLY6Ki1i2bcigKRxXdqcAj86uEMZOmKk2tZDE" width="100px;" alt=""/><br /><sub><b>Marcos Lamarques</b></sub></a><br/></td>
    <td align="center"><a href="https://github.com/micheleset7"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/60739164?v=4" width="100px;" alt=""/><br /><sub><b>Michele Coelho</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/vinicius-carvalho"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/8262141?v=4" width="100px;" alt=""/><br /><sub><b>Vinicius Carvalho</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/RenataMie"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/73265234?v=4" width="100px;" alt=""/><br /><sub><b>Renata Mie</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/renatolobojr"><img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4E03AQGo0qmjjwu9XA/profile-displayphoto-shrink_200_200/0/1587556028562?e=1629331200&v=beta&t=O7lp30Z5I8O8s49cXIOX5x6brGxnKzZeGmBIv_TmdRM" width="100px;" alt=""/><br /><sub><b>Renato Lobo</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/Thais-Hoshii"><img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4D03AQFxBPEY563hCQ/profile-displayphoto-shrink_200_200/0/1600110281835?e=1629331200&v=beta&t=5sKUElvEMdcVaeowULMiDo7ikWVeM0Ls64dq9clFTwU" width="100px;" alt=""/><br /><sub><b>Thaís Hoshii</b></sub></a><br /></td>
    <tr>
 </table>

Nosso email de contato:  g5t2.desafioafyalabs@gmail.com
