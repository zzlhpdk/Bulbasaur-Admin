import { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

export default {
  install(app: App) {
    app.use(createPinia().use(piniaPluginPersist))
  },
}
