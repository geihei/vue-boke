import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/admin/login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})
