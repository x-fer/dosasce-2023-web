import axios from 'axios'

export const http = axios.create({
  baseURL: (import.meta.env.VITE_API_ENDPOINT ?? 'http://localhost:8080') + '/api',
})
