import axios from 'axios'

axios.defaults.baseURL = 'https://open.duyiedu.com'
axios.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    appkey: 'asdf_1572851470835'
  }
  console.log(config)
  return config
}, error => {
  // 请求错误做些什么
  return Promise.reject(error)
})

export default axios
