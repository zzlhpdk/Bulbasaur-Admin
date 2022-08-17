import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //使用路由
import '@/styles/index.scss' //加载全局样式
import elementPlus from '@/pulgins/element-plus' //插件形式引用ElementPlus
import pinia from '@/pulgins/pinia' //插件形式引用pinia

//挂载
createApp(App).use(router).use(elementPlus).use(pinia).mount('#app')
