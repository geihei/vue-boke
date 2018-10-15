/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userLogin = require('../controllers/login')
const table = require('../controllers/work')

const routers = router
    .get('/getAllTableData', table.getAllTableData)
    .post('/login', userLogin.login)

module.exports = routers