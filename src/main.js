// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex'
import router from './router'
import api from './network/index'
import ElementUI from 'element-ui'
import fontSize from './utils/fontSize'
import 'element-ui/lib/theme-chalk/index.css'
import './permission'

Vue.config.productionTip = false

// rem单位自适应
fontSize()
// 引入elementui
Vue.use(ElementUI)
// 引入axios 做请求统一处理
Vue.use(api)

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})

