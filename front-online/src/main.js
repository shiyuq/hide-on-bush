import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css' // or 'ant-design-vue/dist/antd.less'
import { removeLoadingAnimate } from '@/utils/util'

Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  router,
  store,
  created () {
    removeLoadingAnimate('preloadingWrapper')
  },
  render: h => h(App)
}).$mount('#app')
