import axios from 'axios';
import { userStore } from '@/store/user';
import { ElMessage, ElMessageBox } from 'element-plus';
import { useRouter } from 'vue-router'; // useRouter实例对象，useRoute当前路由对象

// const request: AxiosInstance = axios.create({
const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  timeout: 60000 // 请求超时时间
});
// 请求拦截器
request.interceptors.request.use(
  function (config: any) {
    const { token } = userStore();
    config.headers['token'] = token;
    //mock数据接口，需要添加apifoxToken头信息，值为apifox平台的token值，正式环境需要去掉注释
    config.headers['apifoxToken'] = 'JD2RrCLsC6sdCHaxWqHKG';

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  function (response: any) {
    const {
      data: { code, message }
    } = response;
    if (code && code !== 200) {
      if (code === 401) {
        const router = useRouter();
        ElMessageBox.confirm('登录已失效，请重新登录', '提示', {
          confirmButtonText: '去登录',
          cancelButtonText: '忽略',
          type: 'warning'
        })
          .then(() => {
            ElMessage({
              type: 'success',
              message: '请重新登录'
            });

            router.push('/login');
          })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: '已忽略'
            });
          });
        return;
      }
      ElMessage.error(message || '请求错误，请联系管理员');
      return Promise.reject();
    }
    return response.data;
  },
  function (error) {
    ElMessage.error(error.message || '请求错误，请联系管理员');
    return Promise.reject(error);
  }
);

export default request;
