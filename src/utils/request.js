import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })
const request = axios.create({
  baseURL: '/api',
  timeout: 10000
  // headers: {}
})
// 设置请求拦截器
request.interceptors.request.use(
  // 成功回调
  (config) => {
    NProgress.start()
    // config.headers
    return config
  },
  // 失败回调
  () => {}
)
// 设置响应拦截器
request.interceptors.response.use(
  (response) => {
    NProgress.done()
    if (response.status === 200) return response.data
    return Promise.reject(response.status)
  },
  (error) => {
    NProgress.done()
    console.dir(error)
    // console.log(error.message);
    return Promise.reject(error)
  }
)
export default request
