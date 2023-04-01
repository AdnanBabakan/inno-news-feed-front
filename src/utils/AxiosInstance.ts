import axios from 'axios'

// @ts-ignore
const axiosInstance = axios.create({
  baseURL: 'https://inno-api.iran.liara.run/v1',
})

export default axiosInstance