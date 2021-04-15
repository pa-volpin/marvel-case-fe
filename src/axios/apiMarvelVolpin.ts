import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_MARVEL_VOLPIN_API_URL
})

api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem('tokenMarvel')
  try {
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }

    return config
  } catch (err) {
    console.log('err', err)
  }
})


export default api
