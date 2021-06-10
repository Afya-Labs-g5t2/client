import axios from 'axios';

export const api = axios.create({
  // baseURL: 'https://super-simple-message-board.herokuapp.com/'
  baseURL: 'https://g5t2-api.herokuapp.com/'
  // baseURL: 'https://g5t2-api.herokuapp.com/'
})

export const findCep = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})