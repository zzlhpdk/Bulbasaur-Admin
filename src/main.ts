import { createApp } from 'vue';
import App from './App.vue';
import pinia from '@/store/index';
import router from './router'; //使用路由
import '@/styles/index.scss'; //加载全局样式
import elementPlus from '@/pulgins/element-plus'; //插件形式引用ElementPlus

//挂载
createApp(App).use(pinia).use(router).use(elementPlus).mount('#app');
