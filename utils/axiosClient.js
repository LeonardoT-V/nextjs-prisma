import axios from 'axios'

const url = process.env.NEXT_PUBLIC_BASIC_URL;

const apiClient = axios.create({
  baseURL: `${url}`
})

export default apiClient;