import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosError,
} from 'axios'
import { getToken } from '@/utils/authority'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRoute, useRouter } from 'vue-router' // useRouter实例对象，useRoute当前路由对象

// const request: AxiosInstance = axios.create({
const request = axios.create({
  baseURL: '/api',
  timeout: 60000, // 请求超时时间
})
// 请求拦截器
request.interceptors.request.use(
  function (config: any) {
    const token = getToken()
    config.headers['token'] = token
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  function (response: any) {
    const {
      data: { code, message },
    } = response
    if (code && code !== 200) {
      if (code === 401) {
        const router = useRouter()
        ElMessageBox.confirm('登录已失效，请重新登录', '提示', {
          confirmButtonText: '去登录',
          cancelButtonText: '忽略',
          type: 'warning',
        })
          .then(() => {
            ElMessage({
              type: 'success',
              message: '请重新登录',
            })

            router.push('/login')
          })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: '已忽略',
            })
          })
        return
      }
      ElMessage.error(message || '请求错误，请联系管理员')
      return Promise.reject()
    }
    return response.data
  },
  function (error) {
    ElMessage.error(error.message || '请求错误，请联系管理员')
    return Promise.reject(error)
  }
)

export default request
