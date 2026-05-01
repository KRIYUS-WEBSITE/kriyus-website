// src/api.js – Axios instance for backend calls
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/api',         // Vite proxy forwards /api → localhost:5000
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' }
})

// Response interceptor – normalise errors
api.interceptors.response.use(
  res => res,
  err => {
    const msg = err.response?.data?.message || 'Something went wrong. Please try again.'
    return Promise.reject(new Error(msg))
  }
)

export const submitContact   = data => api.post('/contact', data)
export const submitVolunteer = data => api.post('/volunteer', data)
export const submitDonate    = data => api.post('/donate', data)

export default api
