/**
 * restful api 子路由
 */

const router = require('koa-router')()
const article = require('../controllers/article')

const routers = router
    .get('/getAllArticleData', article.getAllArticleData)

module.exports = routers