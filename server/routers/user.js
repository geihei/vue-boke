/**
 * restful api 子路由
 */

const router = require('koa-router')()
const user = require('../controllers/user')

const routers = router
    .post('/login', user.login)

module.exports = routers