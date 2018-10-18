import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex'
import Login from '@/admin/login'
import Home from '@/admin/home'
import List from '@/components/list'
import ArticleForm from '@/components/article-form'
import ArticleDetail from '@/components/article-detail'
/*newpath*/

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
        component: Home,
        children: [
            {
                path: '',
                name: 'home',
                component: List
            },
            {
                path: '/home/:type',
                name: 'list',
                component: List,
            },
            {
                path: '/articleform',
                name: 'articleform',
                component: ArticleForm
            },
            {
                path: '/articledetail/:id',
                name: 'articledetail',
                component: ArticleDetail
            }
        ]
    },
    /*newrouter*/ /**用于添加新的路由模块 不能删除下面注释 */
]

// 页面刷新时 重新赋值token 防止刷新是vuex中状态丢失
if (window.localStorage.token) {
    store.commit('setToken', window.localStorage.token)
}

const router  = new Router({
    routes
})

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
