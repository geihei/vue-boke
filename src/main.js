// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './network/index'

Vue.config.productionTip = false

Vue.use(api)
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})