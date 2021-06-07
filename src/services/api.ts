import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://super-simple-message-board.herokuapp.com/'
})

export const findCep = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})