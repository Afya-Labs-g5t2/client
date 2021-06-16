import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://g5t2-api.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${localStorage.getItem('@tokenG5T2Afya')}`
    'Authorization': `Bearer ${localStorage.getItem('@tokenG5T2Afya')}`
  }
})