import axios from 'axios'
import Cookies from 'js-cookie'

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVERLESS_URL
})

const token = Cookies.get('auth.token')

if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default api
