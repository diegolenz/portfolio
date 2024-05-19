import axios from 'axios'

export const Api = axios.create({
    baseURL: 'https://run.mocky.io/v3',
    timeout: 2000,
    headers: {'X-Custom-Header': 'foobar'}
  });