import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'; //使用vueJsx插件
import { resolve } from 'path'; //path模块是node.js内置的功能，但是node.js本身并不支持ts,解决方案：安装@types/node
import { viteMockServe } from 'vite-plugin-mock'; //mock数据

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    viteMockServe({
      // ↓解析根目录下的mock文件夹
      mockPath: 'src/mock',
      enable: true
    })
  ],
  resolve: {
    //路径别名
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  // variables里面定义的变量不能被获取，所以要通过指定传递给 CSS 预处理器进行配置处理,
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/common.scss";', //注入common公共样式scss到css里面
        prependData: '@use "@/assets/style/element/index.scss" as *;'
      }
    }
  }
  //跨域
  // server: {
  //   proxy: {
  //     // 选项写法
  //     '/api': {
  //       target:
  //         'https://www.fastmock.site/mock/725b16b37c152f279e421bd5947d2785/api', //代理目标地址
  //       changeOrigin: true, //兼容基于名字的虚拟主机，代理服务会把orign修改为目标地址
  //       //路径重写，把api 替换成空
  //       rewrite: path => path.replace(/^\/api/, '')
  //     }
  //   }
  // }
});
