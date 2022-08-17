import ElementPlus from 'element-plus' //全局引入element-plus
import { App } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn' // 配置中文
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 注册全局ICON组件
const getIcon = (app: any) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

export default {
  install(app: App) {
    app.use(ElementPlus, {
      locale: zhCn,
    }),
      getIcon(app)
  },
}
