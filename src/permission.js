import router from './router'
import store from './vuex'

// 权限验证 如果后期有需要
// function hasPermission(roles, permissionRoles) {
//     if (roles.includes('admin')) return true
//     if (!permissionRoles) return true
//     return roles.some(role => permissionRoles.includes(role))
// }

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
    if (store.state.token) {
        // token存在
        if (to.path === '/login' || to.path === '/') {
            // 避免login 跳转到 login 的无限循环问题
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
