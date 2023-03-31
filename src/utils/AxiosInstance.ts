import axios from 'axios'

// @ts-ignore
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/v1',
})

export default axiosInstance