import axios from 'axios'

const api = axios.create({
  baseURL: 'https://proweb.leoproti.com.br',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
