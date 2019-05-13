import axios from 'axios'

// 创建axios实例
const ajaxUrl = (process.env.NODE_ENV === 'production' || process.env.NODE_ENV !== 'development')
    ? 'https://api.github.com'
    : 'https://api.github.com';

const service = axios.create({
  baseURL: ajaxUrl, // api的base_url
  timeout: 15000, // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  config.data = JSON.stringify(config.data)
  config.headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': '' // 让每个请求携带自定义token 请根据实际情况自行修改'
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
})

// respone拦截器
service.interceptors.response.use(
  response => {
    if (response.status == 200) {
      return response.data
    } else if (response.status === 500 || response.status === 404 || response.status === 304) {
      alert("服务器错误")
    }
  },
  error => {
    console.log('err' + error)// for debug
  }
)

export default service
