import checktoken from '../middleware/checktoken'

/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userLogin = require('../controllers/login')

const routers = router
  .post('/login', userLogin.login)

module.exports = routers