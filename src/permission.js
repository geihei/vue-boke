import router from './router'
// import { Message } from 'element-ui'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css'// progress bar style

function hasPermission(roles, permissionRoles) {
    if (roles.includes('admin')) return true
    if (!permissionRoles) return true
    return roles.some(role => permissionRoles.includes(role))
}

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
    if (window.localStorage.token) {
        // token存在
        console.log(to.path)
        if (to.path === '/login') {
            next('/home')
        } else {
            next()
        }
    } else {
        // token不存在
        if (whiteList.includes(to.path)){
            next()
        } else {
            next(`/login?redirect=${to.path}`) //全部重定向到登录页
        }
    }
})

router.afterEach(() => {

})