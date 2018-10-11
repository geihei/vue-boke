import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/admin/login'
import Home from '@/admin/home'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    }
]

const router  = new Router({
    routes
})

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
    store.commit('login', window.localStorage.getItem('token'))
}

export default router

// 此处应该分为两部分路由
// 一部分是不需要登录验证的 如login 404 等页面
// 另一部分是需要验证的 如home 等页面
// export const constantRouterMap = [
//     {
//         path: '/',
//         component: Login
//     },
//     {
//         path: '/login',
//         name: 'login',
//         component: Login
//     },
// ]

// export default new Router ({
//     // mode: 'history', // require service support
//     // scrollBehavior: () => ({ y: 0 }),
//     routes: constantRouterMap
// }) 

// export const asyncRouterMap = [
//     {
//         path: '/home',
//         name: 'home',
//         component: Home
//     }
// ]
