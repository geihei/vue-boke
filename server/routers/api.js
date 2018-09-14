/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userInfoController = require('./../controllers/user-info')
const aa = require('../controllers/login')

const routers = router
  // .get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)
  // .post('/api/signIn.json', userInfoController.signIn)
  // .post('/user/signUp.json', userInfoController.signUp)


  .post('/login', aa.login)

module.exports = routers