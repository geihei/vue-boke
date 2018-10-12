/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userLogin = require('../controllers/login')
const table = require('../controllers/work')
const checktoken = require('../middleware/checktoken')

const routers = router
    .get('/getAllTableData', table.getAllTableData)
    .post('/login', userLogin.login)

module.exports = routers